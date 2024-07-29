import { PORTFOLIO, SUB_MENU } from "./data/data";

export default function sitemap() {
  const services = SUB_MENU.map(({ link }) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/Services/Service/${link}`,
      lastModified: new Date(),
      priority: 0.5,
    };
  }); // 0.5 is the default priority
  const projects = PORTFOLIO.map(({ link }) => {
    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/Projects/${link}`,
      lastModified: new Date(),
      priority: 0.5, // 0.5 is the default priority
    };
  });
  //   const pages = [
  //     { url: "/", lastmod: "2021-01-01" },
  //     { url: "/about", lastmod: "2021-01-01" },
  //     { url: "/contact", lastmod: "2021-01-01" },
  //   ];
  //   const all = services.concat(pages);
  //   const sitemap = all
  //     .map((item) => {
  //       return `<url><loc>${item.url}</loc><lastmod>${item.lastmod}</lastmod></url>`;
  //     })
  //     .join("\n");
  //   return sitemap;

  return [
    {
      url: "https://cdc.construction",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://cdc.construction/About",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://cdc.construction/Team",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...services,
    ...projects,
  ];
}
