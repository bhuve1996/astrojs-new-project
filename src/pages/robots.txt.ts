// robots.txt for SEO
export const GET = () => {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', import.meta.env.SITE).href}
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
