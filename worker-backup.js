export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === '/.well-known/apple-developer-merchantid-domain-association') {
      return fetch('https://stripe.com/files/apple-pay/apple-developer-merchantid-domain-association');
    }
    if (url.pathname === '/kotibo' || url.pathname.startsWith('/kotibo/')) {
      const stripped = url.pathname === '/kotibo' ? '/' : url.pathname.slice('/kotibo'.length);
      return fetch(new Request('https://kotibo.pages.dev' + stripped + url.search, request));
    }
    if (url.pathname === '/scamcheck' || url.pathname.startsWith('/scamcheck/')) {
      return fetch(new Request('https://scamcheck.appswith.ai' + url.pathname + url.search, request));
    }
    return fetch(new Request('https://appswith-landing.pages.dev' + url.pathname + url.search, request));
  }
};
