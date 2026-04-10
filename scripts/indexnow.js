
const https = require('https');
const domain = 'https://www.rankupp.in';
const key = '706b52414be744fc89aebf68cd06571b';

const url = `https://www.bing.com/indexnow?url=${domain}&key=${key}`;

https.get(url, (res) => {
  console.log(`IndexNow status: ${res.statusCode}`);
  res.on('data', () => {});
}).on('error', (e) => {
  console.error('IndexNow error', e);
});
