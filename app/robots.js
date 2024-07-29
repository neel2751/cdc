export default function robots() {
  // return {
  //   rules: [
  //     {
  //       userAgent: "Googlebot", // Googlebot
  //       allow: ["/"], // allow all pages
  //       disallow: ["/Admin/"], // disallow all admin pages
  //     },
  //     {
  //       userAgent: ["Applebot", "Bingbot"], // Applebot, Bingbot, etc. (all bots)
  //       allow: ["/"], // allow all pages
  //       disallow: ["/Admin/"], // disallow admin pages
  //     },
  //   ],
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/Admin/",
    },
    // sitemap: "https://cdc.construction/sitemap.xml", // sitemap location
    sitemap: "http://cdc.construction/sitemap.xml", // sitemap location
  };
}
