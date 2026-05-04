import express from 'express';

const app = express();

/** * Define your routes here
 * Example:
 */
app.get('/', (req, res) => {
  res.send('Server is running on Cloudflare Workers!');
});

/**
 * MANDATORY: Cloudflare Module Worker Export
 * This connects the incoming request to your Express logic 
 * or serves your static assets.
 */
export default {
  async fetch(request, env, ctx) {
    // If you are only serving static files from the 'public' folder:
    return await env.ASSETS.fetch(request);
    
    /**
     * NOTE: If you need to run full Express logic, 
     * Cloudflare requires a specific adapter like 'hono' or 
     * '@codegen-it/adapter-cloudflare-workers' because Express 
     * was built for Node.js, not the V8 Edge Runtime.
     */
  }
};
