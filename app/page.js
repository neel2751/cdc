// import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Constant from "./constant/constant";
// Add schema for our website like {
// const jsonLd = {
//   "@context": "https://schema.org",
//   "@type": "HomeAndConstructionBusiness",
//   name: "Creative Design & Construction",
//   description:
//     "Creative Design & Construction is a full-service construction company that specializes in residential and commercial projects.",
//   url: "https://www.creativeconstruction.com", // URL of your website
//   telephone: "1-800-555-5555", // Phone number of your business
//   address: {
//     // Address of your business
//     "@type": "PostalAddress", // Type of address
//     streetAddress: "123 Main St", // Street address
//     addressLocality: "Anytown", // City
//     addressRegion: "CA", // State
//     postalCode: "12345", // ZIP code
//     addressCountry: "USA", // Country
//   }, // End of address
//   logo: "https://www.creativeconstruction.com/logo.png", // URL of your logo
//   image: "https://www.creativeconstruction.com/image.jpg", // URL of an image representing your business
//   priceRange: "$$$$", // Price range of your services
//   openingHours: [
//     // Opening hours of your business
//     {
//       // Monday
//       "@type": "OpeningHoursSpecification", // Type of opening hours
//       dayOfWeek: ["Mo", "Tu", "We", "Th", "Fr", "Sa"], // Days of the week when your business is open
//       opens: "09:00", // Opening time
//       closes: "17:00", // Closing time
//     },
//   ], // End of opening hours
//   //  Additional properties can be added here as needed projects
//   //  For example, you can add a list of services offered by your business we have to  add a list of services offered by your business
//   services: {
//     "@type": "Service", // Type of service
//     name: "Residential Construction", // Name of the service
//     description:
//       "We specialize in residential construction projects such as new home construction, remodeling, and additions.", // Description of the service
//     provider: {
//       // Information about the provider of the service
//       "@type": "Organization", // Type of organization
//       name: "Creative Design & Construction", // Name of the organization
//       url: "https://www.creativeconstruction.com", // URL of the organization
//       logo: "https://www.creativeconstruction.com/logo.png", // URL of the organization's logo
//     }, // End of provider information
//   },
//   //  Or a list of awards or certifications that your business has received
//   //  Or a list of reviews or testimonials from satisfied customers
//   //  Or any other relevant information about your business
//   //  The possibilities are endless!
// };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Creative Design & Construction",
  image: "/images/Logo_New.svg",
  url: "https://cdc.construction/",
  description:
    "Construction Company to do service provide in Residintial and commercial",
};

export default function Home() {
  // eslint-disable-line react-hooks/exhaustive-deps
  // return <Constant />;
  // const navigation = NavigationEvents.useNavigation();
  // const cursor = Cursor.useCursor();
  return (
    // <Suspense fallback={null}>
    // <NavigationEvents>
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Constant />
    </>
    // </NavigationEvents>
    // </Suspense>
  );
}
