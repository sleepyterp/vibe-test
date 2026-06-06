exports.handler = async (event) => {
  const API_KEY = process.env.SERPAPI_KEY;
  const params = new URLSearchParams(event.queryStringParameters);
  params.set('api_key', API_KEY);

  try {
    const res = await fetch(`https://serpapi.com/search.json?${params}`);
    const data = await res.json();
    return {
      statusCode: res.status,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message }),
    };
  }
};
