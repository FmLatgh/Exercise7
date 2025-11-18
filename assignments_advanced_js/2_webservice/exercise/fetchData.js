// ---------- Utilities ----------
function el(tag, cls) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  return e;
}
function truncate(text, n = 200) {
  if (!text) return "";
  return text.length > n ? text.slice(0, n) + "…" : text;
}
function escapeHtml(s) {
  if (!s) return "";
  return s.replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        ch
      ])
  );
}
function safeName(n) {
  return n?.name || n?.nutrientName || n?.nutrient || "Unknown";
}
function normalizeNutrient(n) {
  // ensure { name, amount, unitName, number }
  return {
    name: safeName(n),
    amount: n.amount ?? n.value ?? n.per ?? null,
    unitName: n.unitName ?? n.unit ?? n.uom ?? "",
    number: n.number ?? n.nutrientNumber ?? null,
  };
}

// ---------- DOM refs ----------
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");
const resultsEl = document.getElementById("results");
const metaEl = document.getElementById("meta");
const emptyEl = document.getElementById("empty");
const sourceSel = document.getElementById("source");

// ---------- Adapters for each source ----------
// Each adapter returns an array of items: { description, brandOwner, source, foodNutrients: [ normalized ] , raw: original }
async function fetchUSDA(q, apiKey) {
  if (!apiKey) throw new Error("USDA API key required for USDA source.");
  const url = new URL("https://api.nal.usda.gov/fdc/v1/foods/list");
  url.searchParams.set("api_key", apiKey);
  url.searchParams.set("query", q);
  const resp = await fetch(url.toString());
  if (!resp.ok) throw new Error(`USDA HTTP ${resp.status}`);
  const data = await resp.json();
  if (!Array.isArray(data)) return [];
  return data.map((it) => ({
    description: it.description || it.foodDescription || "",
    datatype: it.dataType || "",
    brandOwner: it.brandOwner || it.brandName || "",
    source: "USDA",
    fdcId: it.fdcId,
    publicationDate: it.publicationDate,
    foodNutrients: Array.isArray(it.foodNutrients)
      ? it.foodNutrients.map(normalizeNutrient)
      : [],
    raw: it,
  }));
}

async function fetchOFF(q) {
  // OpenFoodFacts search
  const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(
    q
  )}&search_simple=1&action=process&json=1&page_size=50`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`OpenFoodFacts HTTP ${resp.status}`);
  const json = await resp.json();
  const products = Array.isArray(json.products) ? json.products : [];
  return products.map((p) => {
    // OFF stores nutrients in p.nutriments as key:value pairs (often per 100g)
    const nutr = [];
    if (p.nutriments) {
      // transform typical keys into readable nutrients when possible
      for (const [k, v] of Object.entries(p.nutriments)) {
        // Skip non-numeric values
        if (typeof v !== "number") continue;
        // key -> human name (simple transform)
        const name = k.replace(/_/g, " ").toUpperCase();
        nutr.push({
          name,
          amount: v,
          unitName: p.nutriments[`${k}_unit`] ?? "",
          number: null,
        });
      }
    }
    return {
      description: p.product_name || p.generic_name || p.labels || "",
      brandOwner: p.brands || p.brands_tags?.[0] || "",
      source: "OpenFoodFacts",
      code: p.code,
      foodNutrients: nutr.map((n) => ({
        name: n.name,
        amount: n.amount,
        unitName: n.unitName,
        number: null,
      })),
      raw: p,
    };
  });
}

async function fetchCNF(q) {
  // Attempt Health Canada CNF API (public mirror). If unavailable, this will throw and be caught by caller.
  // NOTE: this endpoint may change; code will fail gracefully.
  const url = `https://food-nutrition.canada.ca/api/canadian-nutrient-file/foods?search=${encodeURIComponent(
    q
  )}&page_size=50`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Canadian Nutrient File HTTP ${resp.status}`);
  const json = await resp.json();
  if (!Array.isArray(json)) return [];
  return json.map((it) => ({
    description: it.food_description || it.description || "",
    brandOwner: "Canadian Nutrient File",
    source: "CNF",
    foodNutrients: Array.isArray(it.nutrients)
      ? it.nutrients.map((n) => ({
          name: n.nutrient_name || n.name,
          amount: n.value ?? n.amount ?? null,
          unitName: n.unit ?? n.uom ?? "",
          number: n.nutrient_id ?? n.number ?? null,
        }))
      : [],
    raw: it,
  }));
}

// ---------- ALL aggregator ----------
async function fetchAll(q, apiKey) {
  // Run open sources in parallel. USDA requires apiKey — if not provided, USDA will be skipped.
  const promises = [
    (async () => {
      try {
        return await fetchOFF(q);
      } catch (e) {
        console.warn("OFF failed", e);
        return [];
      }
    })(),
    (async () => {
      try {
        return await fetchCNF(q);
      } catch (e) {
        console.warn("CNF failed", e);
        return [];
      }
    })(),
  ];
  if (apiKey) {
    promises.push(
      (async () => {
        try {
          return await fetchUSDA(q, apiKey);
        } catch (e) {
          console.warn("USDA failed", e);
          return [];
        }
      })()
    );
  } else {
    console.warn("USDA skipped in ALL mode (no API key)");
  }

  const results = await Promise.all(promises);
  // flatten
  const merged = results.flat();
  // mark source clearly already included
  return merged;
}

// ---------- Rendering ----------
function renderItems(items, limit) {
  resultsEl.innerHTML = "";
  if (!items || items.length === 0) {
    emptyEl.style.display = "";
    return;
  }
  emptyEl.style.display = "none";
  const sliced = items.slice(0, limit);
  sliced.forEach((item, idx) => {
    const details = el("details");
    if (idx === 0) details.open = true;
    const summary = el("summary");

    const left = el("div", "summary-left");
    const title = el("span");
    title.textContent = item.description || `Item ${idx + 1}`;
    const badge = el("span", "badge");
    badge.textContent = item.source || "Unknown";
    const badge2 = el("span", "badge");
    badge2.textContent = item.datatype;
    //check badge2 empty
    left.appendChild(title);
    left.appendChild(badge);
    left.appendChild(badge2);
    if (!item.dataType) {
      badge2.remove(); // removes the element from the DOM
    }

    const rightWrap = el("div");
    rightWrap.style.marginLeft = "auto";
    rightWrap.style.display = "flex";
    rightWrap.style.gap = "8px";
    rightWrap.style.alignItems = "center";
    const idSpan = el("span", "small");
    idSpan.textContent = item.fdcId
      ? `fdcId: ${item.fdcId}`
      : item.code
      ? `code: ${item.code}`
      : "";
    rightWrap.appendChild(idSpan);

    summary.appendChild(left);
    summary.appendChild(rightWrap);
    details.appendChild(summary);

    // body
    const body = el("div", "body-grid");
    const leftCol = el("div");

    const desc = el("div", "desc");
    desc.innerHTML = `<strong>Description:</strong> ${escapeHtml(
      item.description || ""
    )}`;
    leftCol.appendChild(desc);

    if (item.brandOwner) {
      const b = el("div", "small");
      b.style.marginTop = "8px";
      b.innerHTML = `<strong>Brand:</strong> ${escapeHtml(item.brandOwner)}`;
      leftCol.appendChild(b);
    }

    // nutrients block
    const nutrients = Array.isArray(item.foodNutrients)
      ? item.foodNutrients.map((n) => {
          // ensure normalized shape
          if (typeof n === "object" && "name" in n) {
            return normalizeNutrient(n);
          } else if (Array.isArray(n)) {
            return normalizeNutrient(n[0] || {});
          } else {
            return {
              name: String(n),
              amount: null,
              unitName: "",
              number: null,
            };
          }
        })
      : [];

    if (nutrients.length) {
      const nut = el("div", "nutrients");
      nut.innerHTML = `<strong>Nutrients (${nutrients.length})</strong>`;
      const list = el("div");
      list.style.marginTop = "8px";
      list.style.maxHeight = "240px";
      list.style.overflowY = "auto";
      list.style.paddingRight = "6px";

      nutrients.forEach((n) => {
        const row = el("div", "nutrient-row");
        const name = el("div");
        // include nutrient number as secondary text (not overriding amount)
        const numLabel = n.number ? ` (#${n.number})` : "";
        name.textContent = `${n.name}${numLabel}`;
        const value = el("div");
        // amount precedence: amount -> '—'
        value.textContent = `${n.amount ?? "—"} ${n.unitName ?? ""}`.trim();
        row.appendChild(name);
        row.appendChild(value);
        list.appendChild(row);
      });

      nut.appendChild(list);
      leftCol.appendChild(nut);
    }

    // actions
    const actions = el("div", "controls-row");
    actions.style.marginTop = "10px";
    const copyBtn = el("button");
    copyBtn.textContent = "Copy JSON";
    copyBtn.onclick = () => {
      navigator.clipboard
        .writeText(JSON.stringify(item.raw ?? item, null, 2))
        .then(() => {
          copyBtn.textContent = "Copied!";
          setTimeout(() => (copyBtn.textContent = "Copy JSON"), 1000);
        })
        .catch(() => {
          copyBtn.textContent = "Copy failed";
          setTimeout(() => (copyBtn.textContent = "Copy JSON"), 1000);
        });
    };
    actions.appendChild(copyBtn);
    leftCol.appendChild(actions);

    body.appendChild(leftCol);

    // right column: raw JSON
    const rightCol = el("div");
    const pre = el("pre", "json");
    pre.textContent = JSON.stringify(item.raw ?? item, null, 2);
    rightCol.appendChild(pre);
    body.appendChild(rightCol);

    details.appendChild(body);
    resultsEl.appendChild(details);
  });
}

// ---------- Main search handler ----------
searchBtn.addEventListener("click", async () => {
  const q = document.getElementById("query").value.trim();
  const apiKey = document.getElementById("apiKey").value.trim();
  const limit = parseInt(document.getElementById("limit").value, 10) || 25;
  const source = sourceSel.value;

  resultsEl.innerHTML = "";
  metaEl.textContent = "";
  emptyEl.style.display = "none";

  if (!q) {
    metaEl.textContent = 'Enter a query (for example: "gouda").';
    return;
  }

  searchBtn.disabled = true;
  const spinner = el("span", "spinner");
  searchBtn.textContent = "Searching...";
  searchBtn.prepend(spinner);

  try {
    const start = performance.now();
    let items = [];
    if (source === "usda") {
      try {
        items = await fetchUSDA(q, apiKey);
      } catch (e) {
        throw new Error(`USDA failed: ${e.message}`);
      }
    } else if (source === "off") {
      items = await fetchOFF(q);
    } else if (source === "cnf") {
      try {
        items = await fetchCNF(q);
      } catch (e) {
        throw new Error(`CNF failed: ${e.message}`);
      }
    } else if (source === "all") {
      items = await fetchAll(q, apiKey);
    } else {
      items = [];
    }

    const took = Math.round(performance.now() - start);
    metaEl.textContent = `Source: ${source.toUpperCase()} — Found ${
      Array.isArray(items) ? items.length : 0
    } result(s). Query took ${took}ms.`;

    renderItems(items, limit);
  } catch (err) {
    metaEl.textContent = `Error: ${err.message}`;
    console.error(err);
  } finally {
    searchBtn.disabled = false;
    searchBtn.textContent = "Search";
  }
});

// clear
clearBtn.addEventListener("click", () => {
  document.getElementById("query").value = "";
  resultsEl.innerHTML = "";
  metaEl.textContent = "";
  emptyEl.style.display = "";
});

// quick enter key support for query input
document.getElementById("query").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});

// initial state
window.addEventListener("load", () => {
  emptyEl.style.display = "";
});
