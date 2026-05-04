import express from 'express';

const app = express();

// Your API Routes
app.get('/', (req, res) => {
  res.send('Server is working perfectly!');
});

// IMPORTANT: The Cloudflare Handler
export default {
  async fetch(request, env, ctx) {
    // This allows Cloudflare to handle the request 
    // and serve static assets if needed.
    if (env.ASSETS) {
        return await env.ASSETS.fetch(request);
    }
    
    // For a full Express API on Cloudflare, 
    // it's recommended to use a framework like Hono 
    // or a dedicated adapter.
    return new Response("Hello from Cloudflare Worker!");
  }
};
