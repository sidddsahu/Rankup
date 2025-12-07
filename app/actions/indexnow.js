// /app/actions/indexnow.js
'use server';

const INDEX_NOW_KEY = "706b52414be744fc89aebf68cd06571b";

export async function submitToIndexNow(urls) {
  const host = "https://www.rankupp.in";
  const keyLocation = `${host}/${INDEX_NOW_KEY}.txt`;

  const payload = {
    host,
    key: INDEX_NOW_KEY,
    keyLocation,
    urlList: urls
  };

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    return response.status === 200;
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return false;
  }
}