export.handler = async function (event, context) {
  const url = new URL("https://github.com/login/oauth/access_token");
  // url.searchParams.append("client_id", GITHUB_CLIENT_ID);
  // url.searchParams.append("client_secret", GITHUB_CLIENT_SECRET);
  // url.searchParams.append("code", code);
  // url.searchParams.append("state", STATE_STRING);
  // url.searchParams.append("redirect_uri", REDIRECT_URI);
  console.log(event)
  console.log(process.env.GITHUB_CLIENT_ID)
  console.log(process.env.GITHUB_CLIENT_SECRET)
  console.log(process.env.STATE_STRING)

  const token = ''
  return {
    statusCode: 200,
    body: JSON.stringify({
      token
    })
  }
}
