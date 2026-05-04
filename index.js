import express from 'express';

const app = express();

// Sample Route
app.get('/api', (req, res) => {
  res.json({ message: "VPN API is working!" });
});

export default {
  async fetch(request, env, ctx) {
    // මෙය ඉතා වැදගත්: Static assets (HTML/CSS) පෙන්වීමට මෙය අවශ්‍යයි
    if (env.ASSETS) {
      const response = await env.ASSETS.fetch(request);
      if (response.status !== 404) return response;
    }

    // වෙනත් API requests තිබේ නම් මෙතැනින් හැඬල් කළ හැක
    return new Response("Hello from Cloudflare Worker!");
  }
};
