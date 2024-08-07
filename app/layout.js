import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google"; // https://github.com/vercel/next.js/tree/canary/examples/with-google-tag-manager

// const kanit = Sora({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
// });
const kanit = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

// export const metadata = { themeColor: '#212529' }

export const metadata = {
  // Write for Construction company to do service provide in Residintial and commercial
  title: "Creative Design & Construction", // Used in documentation to set the HTML <title> tag
  description:
    "Construction Company to do service provide in Residintial and commercial", // Used in documentation to set the HTML <meta> tag
  // themeColor: "#212529", // Used by Chrome, Firefox, Safari, Edge, and Opera to set the color of the address bar and bookmark button
  metadataBase: new URL("https://cdc.construction"), // Set this to your production URL
  generator: "Creative Design & Construction",
  applicationName: "Creative Design & Construction",
  alternates: {
    canonical: `https://cdc.construction`,
  },
  // referrer: 'origin-when-cross-origin', after  setting up CORS on the server side (see below)
  keywords: [
    "Renovation",
    "Loft Conversion",
    "Residential",
    "Commercial",
    "Property",
    "Construction", // Add your keywords here
    "Planning Application",
  ], // we have to research  more about SEO and add relevant keywords here
  openGraph: {
    title: "Uk Best Construction Company",
    description:
      "Creative design and construction services for commercial and residential projects in the UK.",
    url: "https://cdc.construction",
    siteName: "Creative  Design & Construction",
    images: "/og-image.jpg",
    local: "en_GB",
    type: "website",
    // images: [
    //   {
    //     url: "https://cdc.construction/og-image.jpg", // Replace with actual URL
    //     width: 1200, // Replace with actual width
    //     height: 630, // Replace with actual height
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Design  & Construction Services - Uk Best Construction",
    description: "Uk Best Construction Company",
    site: "@cdc",
    // creator: '@nextjs', we have to add after  reviewing Twitter team policy
    // creatorId: "1467726470533754880",
    images: ["https://cdc.construction/og-image.jpg"], // Must be an absolute URL
  },
};

// export const viewport = {
//   viewport: "width=device-width, initial-scale=1, maximum-scale=1",
//   // initialViewPorts: [
//   //   // { id: "viewport1", width: "100%", height: "80%" },
//   //   // { id: "viewport2", position: "right", width: "50%", height: "80%" },
//   // ]
//   themeColor: "#EAF3F5", // this is the main color of the app
// };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WLHPKM9C" />
      <body className={`${kanit.className} bg-[#FFFFFF]`}>{children}</body>
      {/* Add a Facebook pixel script here... */}
    </html>
  );
}
