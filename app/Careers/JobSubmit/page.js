import Footer from "@/app/component/Footer/Footer";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import { NavigationEvents } from "@/app/Helper/navigationHelper";
import JobSubmit from "./JobSubmit";
import { Suspense } from "react";

export default function Page({ params = "test" }) {
  return (
    <Suspense fallback={null}>
      <NavigationEvents>
        <SubMenu>
          <Navbar />
        </SubMenu>
        <JobSubmit params={params} />
        <Footer />
      </NavigationEvents>
    </Suspense>
  );
}
