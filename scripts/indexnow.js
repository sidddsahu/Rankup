/**
 * Simple IndexNow ping script.
 * Replace DOMAIN and KEY before using.
 */

const https = require('https');
const domain = 'https://yourdomain.com';
const key = 'REPLACE_WITH_KEY';

const url = `https://www.bing.com/indexnow?url=${domain}&key=${key}`;

https.get(url, (res) => {
  console.log(`IndexNow status: ${res.statusCode}`);
  res.on('data', () => {});
}).on('error', (e) => {
  console.error('IndexNow error', e);
});
