export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    let res = await env.ASSETS.fetch(request);

    // file mil gayi
    if (res.status !== 404) {
      return res;
    }

    // root → language redirect
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
  }
};
