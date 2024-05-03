"use client";
import React, { Suspense } from "react";
import { SubMenu } from "../component/Header/submenu";
import Navbar from "../component/Header/navbar";
import CallBack from "./CallBack";
import Footer from "../component/Footer/Footer";
import { NavigationEvents } from "../Helper/navigationHelper";

const page = () => {
  return (
    <>
      <Suspense fallback={null}>
        <NavigationEvents>
          <SubMenu>
            <Navbar />
          </SubMenu>
          <CallBack />
          <Footer />
        </NavigationEvents>
      </Suspense>
    </>
  );
};

export default page;
