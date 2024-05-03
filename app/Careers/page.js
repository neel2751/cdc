// import TopBar from "./component/Static/TopBar";
// import Slider from "./component/Slider/Slider";
import { Suspense } from "react";
import { NavigationEvents } from "../Helper/navigationHelper";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/navbar";
import { SubMenu } from "../component/Header/submenu";
import Hero from "../component/Hero/hero";
import HeroStatic from "../component/Hero/HeroStatic/HeroStatic";
export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <NavigationEvents>
          <SubMenu>
            <Navbar />
          </SubMenu>
          <HeroStatic
            tag={"Careers"}
            company={"Creative Design & Construction"}
            title={"Greate people Good, Place & Awesome Mind"}
          />
          <Footer />
        </NavigationEvents>
      </Suspense>
    </>
  );
}
