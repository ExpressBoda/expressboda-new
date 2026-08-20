export default function handler(req, res) {
  const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
  const REDIRECT_URI = process.env.REDIRECT_URI;
  
  if (!CLIENT_ID || !REDIRECT_URI) {
    return res.status(500).send("Missing Environment Variables");
  }

  const authURL = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=repo,user`;
  res.redirect(authURL);
}