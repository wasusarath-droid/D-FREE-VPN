export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. ඔබේ API එක මෙතැනින් ලියන්න (Express App එකක් වෙනුවට)
    if (url.pathname === "/api") {
      return new Response(JSON.stringify({ message: "VPN API is working!" }), {
        headers: { "content-type": "application/json" }
      });
    }

    // 2. Static Assets (HTML/CSS) පෙන්වීමට:
    if (env.ASSETS) {
      const response = await env.ASSETS.fetch(request);
      if (response.status !== 404) return response;
    }

    return new Response("Not Found", { status: 404 });
  }
};
