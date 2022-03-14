import axios from 'axios';

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTION",
}

exports.handler = async function (event) {
  const {
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    STATE_STRING,
    REDIRECT_URI,
  } = process.env;
  const { code } = event?.queryStringParameters || {};
  if (code) {
    const url = new URL("https://github.com/login/oauth/access_token");
    url.searchParams.append("client_id", GITHUB_CLIENT_ID);
    url.searchParams.append("client_secret", GITHUB_CLIENT_SECRET);
    url.searchParams.append("code", code);
    url.searchParams.append("state", STATE_STRING);
    url.searchParams.append("redirect_uri", REDIRECT_URI);
    const response = await axios.get(url.href);
    console.log(response);
    const token = ''

    return {
      statusCode: 200,
      body: JSON.stringify({
        token
      }),
      headers
    }
  }

  return {
    statusCode: 401,
    body: null,
    headers
  }
}
