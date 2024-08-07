import { Suspense } from "react";
import { NavigationEvents } from "../Helper/navigationHelper";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/navbar";
import { SubMenu } from "../component/Header/submenu";
import Cookie from "./Cookie";
export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <NavigationEvents>
          <SubMenu>
            <Navbar />
          </SubMenu>
          <div className="max-w-7xl mx-auto py-10 sm:px-5 px-10">
            <Cookie />
          </div>
          <Footer />
        </NavigationEvents>
      </Suspense>
    </>
  );
}
