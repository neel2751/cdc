import Footer from "../component/Footer/Footer";
import Navbar from "../component/Header/navbar";

import { SubMenu } from "../component/Header/submenu";
import AllService from "./AllService";

export default function Home() {
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <AllService />
      <Footer />
    </>
  );
}
