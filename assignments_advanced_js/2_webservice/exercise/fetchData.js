// Core async fetch function — uses the USDA FDC "foods/list" endpoint.
// NOTE: replace the API key with your own. The form includes an API key field.
// The USDA FDC API may be subject to CORS depending on the environment.
// If you see a CORS error, run this from a simple local server or create a small proxy.

const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const resultsEl = document.getElementById('results');
const metaEl = document.getElementById('meta');
const emptyEl = document.getElementById('empty');

searchBtn.addEventListener('click', async () => {
    const apiKey = document.getElementById('apiKey').value.trim();
    const q = document.getElementById('query').value.trim();
    const limit = parseInt(document.getElementById('limit').value, 10) || 25;

    resultsEl.innerHTML = '';
    metaEl.textContent = '';
    emptyEl.style.display = 'none';

    if (!apiKey) {
        metaEl.textContent = '⚠️ Please paste your USDA FDC API key in the API key field.';
        return;
    }
    if (!q) {
        metaEl.textContent = '⚠️ Enter a query (for example: "gouda").';
        return;
    }

    searchBtn.disabled = true;
    const spinner = document.createElement('span'); spinner.className = 'spinner';
    searchBtn.textContent = 'Searching...';
    searchBtn.prepend(spinner);

    try {
        const start = performance.now();
        // build URL (encode query). FDC "foods/list" accepts "query" and some other params depending on the dataset.
        const url = new URL('https://api.nal.usda.gov/fdc/v1/foods/list');
        url.searchParams.set('api_key', apiKey);
        url.searchParams.set('query', q);
        // optional: request a specific dataType? url.searchParams.set('dataType','Branded');
        // we won't request additional fields here — the API returns objects; we'll inspect them.

        const resp = await fetch(url.toString());
        if (!resp.ok) {
            throw new Error(`HTTP ${resp.status} — ${resp.statusText}`);
        }
        const data = await resp.json();

        const took = Math.round(performance.now() - start);
        metaEl.textContent = `Found ${Array.isArray(data) ? data.length : 0} raw items (displaying up to ${limit}). Query took ${took}ms.`;

        if (!Array.isArray(data) || data.length === 0) {
            emptyEl.style.display = '';
            return;
        }

        // Limit results for display
        const items = data.slice(0, limit);

        // Build accordion entries
        items.forEach((item, idx) => {
            const details = document.createElement('details');
            if (idx === 0) details.open = true; // open first for convenience

            const summary = document.createElement('summary');

            const left = document.createElement('div'); left.className = 'summary-left';
            const title = document.createElement('span');
            // prefer an obvious readable label
            const label = item.description || item.foodDescription || item.brandOwner || ('Item ' + (item.fdcId || idx+1));
            title.textContent = label;
            const badge = document.createElement('span'); badge.className = 'badge';
            badge.textContent = item.dataType ? item.dataType.replace(/\s+/g,'') : (item.brandOwner ? 'Branded' : 'Legacy');

            left.appendChild(title);
            left.appendChild(badge);

            const rightWrap = document.createElement('div');
            rightWrap.style.marginLeft = 'auto';
            rightWrap.style.display = 'flex';
            rightWrap.style.gap = '8px';
            rightWrap.style.alignItems = 'center';

            const idSpan = document.createElement('span');
            idSpan.className = 'small';
            idSpan.textContent = item.fdcId ? `fdcId: ${item.fdcId}` : '';
            rightWrap.appendChild(idSpan);

            summary.appendChild(left);
            summary.appendChild(rightWrap);

            details.appendChild(summary);

            // body
            const body = document.createElement('div');
            body.className = 'body-grid';

            const leftCol = document.createElement('div');

            const desc = document.createElement('div'); desc.className = 'desc';
            desc.innerHTML = `<strong>Description:</strong> ${escapeHtml(item.description || item.foodDescription || '—')}`;
            leftCol.appendChild(desc);

            // ingredients or brand
            if (item.brandOwner || item.ingredients) {
                const b = document.createElement('div'); b.className = 'small';
                b.style.marginTop = '8px';
                b.innerHTML = (item.brandOwner ? `<strong>Brand:</strong> ${escapeHtml(item.brandOwner)} ` : '')
                    + (item.ingredients ? `<br><strong>Ingredients:</strong> ${escapeHtml(truncate(item.ingredients, 400))}` : '');
                leftCol.appendChild(b);
            }

            // nutrients (if present)
            if (Array.isArray(item.foodNutrients) && item.foodNutrients.length) {
                const nut = document.createElement('div'); nut.className = 'nutrients';
                nut.innerHTML = `<strong>Nutrients (first ${Math.min(item.foodNutrients.length, 8)} shown):</strong>`;
                const list = document.createElement('div');
                list.style.marginTop = '8px';
                item.foodNutrients.slice(0, 8).forEach(n => {
                    const row = document.createElement('div'); row.className = 'nutrient-row';
                    const name = document.createElement('div'); name.textContent = `${n.nutrientName || n.name || n.nutrient}`;
                    const value = document.createElement('div'); value.textContent = `${n.value ?? '—'} ${n.unitName ?? n.unit ?? ''}`;
                    row.appendChild(name); row.appendChild(value);
                    list.appendChild(row);
                });
                nut.appendChild(list);
                leftCol.appendChild(nut);
            }

            // small action row: copy JSON
            const actions = document.createElement('div'); actions.className='controls-row';
            actions.style.marginTop = '10px';
            const copyBtn = document.createElement('button');
            copyBtn.textContent = 'Copy JSON';
            copyBtn.onclick = () => {
                navigator.clipboard.writeText(JSON.stringify(item, null, 2)).then(()=> {
                    copyBtn.textContent = 'Copied!';
                    setTimeout(()=> copyBtn.textContent = 'Copy JSON',1000);
                }, ()=> {
                    copyBtn.textContent = 'Copy failed';
                    setTimeout(()=> copyBtn.textContent = 'Copy JSON',1000);
                });
            };
            actions.appendChild(copyBtn);
            leftCol.appendChild(actions);

            body.appendChild(leftCol);

            // right column: preformatted JSON for quick inspection
            const rightCol = document.createElement('div');
            const pre = document.createElement('pre');
            pre.className = 'json';
            pre.textContent = JSON.stringify(item, null, 2);
            rightCol.appendChild(pre);
            body.appendChild(rightCol);

            details.appendChild(body);
            resultsEl.appendChild(details);
        });

    } catch (err) {
        metaEl.textContent = `Error: ${err.message}`;
        console.error(err);
    } finally {
        searchBtn.disabled = false;
        searchBtn.textContent = 'Search';
    }
});

clearBtn.addEventListener('click', () => {
    document.getElementById('query').value = '';
    document.getElementById('results').innerHTML = '';
    document.getElementById('meta').textContent = '';
    document.getElementById('empty').style.display = '';
});

// small helpers
function truncate(text, n=200){
    if (!text) return '';
    return text.length > n ? text.slice(0,n) + '…' : text;
}
function escapeHtml(s) {
    if (!s) return '';
    return s.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}

// quick-run if page loaded and default query exists:
window.addEventListener('load', () => {
    // do not auto-run search because the user needs to provide an API key.
    // if you want to auto-run, uncomment the next line (and ensure API key field is filled).
    // document.getElementById('searchBtn').click();
});