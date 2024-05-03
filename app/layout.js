import { Sora, Poppins } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

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
  title: "Uk Best Construction | Creative Design & Construction",
  description: "Uk Best Construction Company",
  metadataBase: new URL("https://cdc.construction"), // Set this to your production URL
  generator: "Creative Design & Construction",
  applicationName: "Creative Design & Construction",
  // referrer: 'origin-when-cross-origin', after  setting up CORS on the server side (see below)
  keywords: [
    "Renovation",
    "Loft Conversion",
    "Residential",
    "Commercial",
    "Property",
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
//   themeColor: "#EAF3F5",
// };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WLHPKM9C" />
      <body className={`${kanit.className} bg-[#EAF3F5]`}>{children}</body>
      {/* Add a Facebook pixel script here... */}
    </html>
  );
}
