import { NavigationEvents } from "@/app/Helper/navigationHelper";
import Footer from "@/app/component/Footer/Footer";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import Res from "./res";
import React, { Suspense } from "react";

const page = () => {
  return (
    <>
      <Suspense fallback={null}>
        <NavigationEvents>
          <SubMenu>
            <Navbar />
          </SubMenu>
          <Res />
          <Footer />
        </NavigationEvents>
      </Suspense>
    </>
  );
};

export default page;
