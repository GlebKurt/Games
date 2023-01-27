const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetch(url)
.then(response => response.json())
.then(data => {
const rate = data.bpi.USD.rate;
document.getElementById('exchangeRate').innerText = rate;
});