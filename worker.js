export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      let res = await env.ASSETS.fetch(request);

      // agar file mil gayi
      if (res && res.status !== 404) {
        return res;
      }

      // root redirect
      if (url.pathname === "/") {
        return Response.redirect(url.origin + "/en/", 302);
      }

      // language 404
      if (url.pathname.startsWith("/en/")) {
        return env.ASSETS.fetch(new Request(url.origin + "/en/404.html"));
      }

      if (url.pathname.startsWith("/es/")) {
        return env.ASSETS.fetch(new Request(url.origin + "/es/404.html"));
      }

      // global 404
      return env.ASSETS.fetch(new Request(url.origin + "/404.html"));

    } catch (err) {
      return new Response("Worker Crash: " + err.message, { status: 500 });
    }
  }
};
