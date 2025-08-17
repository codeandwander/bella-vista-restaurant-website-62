export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle social media links
    if (url.pathname === '/footer') {
      return new Response(`
        <footer>
          <div class="social-links">
            <a href="https://www.facebook.com/bellavista" target="_blank">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/bellavista" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/bellavista" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </footer>
      `, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8'
        }
      });
    }

    // Handle other routes
    return new Response('Not Found', { status: 404 });
  }
}