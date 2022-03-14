import axios from "axios";

exports.handler = async function (event) {
  try {
    const {
      GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET,
      STATE_STRING,
      REDIRECT_URI,
    } = process.env;
    const { code } = event?.queryStringParameters || {};
    if (!code) throw new Error();

    const url = new URL("https://github.com/login/oauth/access_token");
    url.searchParams.append("client_id", GITHUB_CLIENT_ID);
    url.searchParams.append("client_secret", GITHUB_CLIENT_SECRET);
    url.searchParams.append("code", code);
    url.searchParams.append("state", STATE_STRING);
    url.searchParams.append("redirect_uri", REDIRECT_URI);

    const { data } = await axios.get(url.href);
    if (!data) throw new Error();

    const token = new URLSearchParams(data).get("access_token");
    return {
      statusCode: 200,
      body: JSON.stringify({
        token,
      }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTION",
      },
    };
  } catch (error) {
    return {
      statusCode: 401,
      body: "Auth error",
    };
  }
};
