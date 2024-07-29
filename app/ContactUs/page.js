import { Suspense } from "react";
import { NavigationEvents } from "../Helper/navigationHelper";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/navbar";
import { SubMenu } from "../component/Header/submenu";
import Contact from "./Contact";
export default function Home() {
  return (
    // <Suspense fallback={null}>
    // <NavigationEvents>
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <Contact />
      <Footer />
    </>
    // </NavigationEvents>
    // </Suspense>
  );
}
