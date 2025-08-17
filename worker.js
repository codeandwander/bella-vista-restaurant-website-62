import { KVNamespace } from '@cloudflare/workers-types';

// Declare the KV namespace
declare const MY_KV: KVNamespace;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle different routes
    if (url.pathname === '/api/menu') {
      // Fetch menu data from Cloudflare KV
      const menu = await MY_KV.get('menu');
      return new Response(menu, {
        headers: { 'Content-Type': 'application/json' }
      });
    } else if (url.pathname === '/api/hours') {
      // Fetch hours data from Cloudflare KV
      const hours = await MY_KV.get('hours');
      return new Response(hours, {
        headers: { 'Content-Type': 'application/json' }
      });
    } else if (url.pathname === '/api/about') {
      // Fetch about us data from Cloudflare KV
      const about = await MY_KV.get('about');
      return new Response(about, {
        headers: { 'Content-Type': 'application/json' }
      });
    } else if (url.pathname === '/') {
      // Serve the static HTML page
      const html = await MY_KV.get('index.html');
      return new Response(html, {
        headers: { 'Content-Type': 'text/html; charset=UTF-8' }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
};