// Client-side JavaScript for Bella Vista Restaurant Website

document.addEventListener('DOMContentLoaded', function() {
    console.log('Bella Vista Restaurant Website loaded successfully');
    
    // Add any client-side functionality here
    const content = document.getElementById('content');
    if (content) {
        content.innerHTML = '<p>Welcome to Bella Vista Restaurant Website. This is a static site deployed on Cloudflare Workers.</p>';
    }
});
