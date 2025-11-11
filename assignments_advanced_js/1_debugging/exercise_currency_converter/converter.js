async function fetchExchangeRate(fromCurrency, toCurrency) {
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.rates[toCurrency];
}

async function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }

    try {
        const exchangeRate = await fetchExchangeRate(fromCurrency, toCurrency);
        const convertedAmount = amount * exchangeRate;
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } catch (error) {
        document.getElementById('result').innerText = "Error fetching exchange rate. Please try again later.";
    }
}

//wait was this meant to be broken? doesn't look broke to me