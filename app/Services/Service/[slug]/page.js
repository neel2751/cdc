import NotFound from "@/app/not-found";
import Footer from "@/app/component/Footer/Footer";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import { SUB_MENU } from "@/app/data/data";
import Detail from "../Detail";
import { NavigationEvents } from "@/app/Helper/navigationHelper";

// Generate A Meta data
export async function generateMetadata({ params }, parent) {
  // fetch data
  const [service] = SUB_MENU.filter(function (menu) {
    return menu.link === params.slug;
  }).map(function (item) {
    return item;
  });

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: service.name,
    description: service.description,
    openGraph: {
      type: "website", // `website`, `article`, `profile`, `video`, `audio`, `book`, `reference_book`, `product`, `profile`, `profile_group`, `profile_organization`, `profile_person`, `profile_place`, `profile_product`, `profile_software`, `profile_website`, `profile_other` or `website` (default)
      url: `https://cdc.construction/Services/Service/${service.name}`,
      title: service.name, // Facebook Pixel
      description: service.description, // Facebook Pixel
      images: [...previousImages, { url: service.image }], // Facebook Pixel
    }, // Facebook Pixel
    alternates: {
      canonical: `https://cdc.construction/Services/Service/${service.name}`,
    },
    twitter: {
      // Twitter Card
      card: "summary_large_image", // `summary`, `summary_large_image`, `player`, `app`, `book`, `product`, `profile`, `url` or `none` (default)
      site: "@cdcconstruction", // Twitter Pixel
      title: service.name, // Twitter Pixel
      description: service.description, // Twitter Pixel
      images: [...previousImages, { url: service.image }], // Twitter Pixel
    }, // Twitter Card
  };
}

export default function Page({ params }) {
  const check = SUB_MENU.filter(function (menu) {
    return menu.link === params.slug;
  }).map(function (item) {
    return item;
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Services",
    name: check.name,
    image: check.image,
    description: check.description,
  };

  return (
    <NavigationEvents>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {check.length === 0 ? <NotFound /> : <Detail slug={check[0]} />}
      <Footer />
    </NavigationEvents>
  );
}
