import Footer from "@/app/component/Footer/Footer";
import Navbar from "@/app/component/Header/navbar";
import { SubMenu } from "@/app/component/Header/submenu";
import { NavigationEvents } from "@/app/Helper/navigationHelper";
import JobDetail from "../JobDetail";

export default function Page({ params }) {
  return (
    <NavigationEvents>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <JobDetail params={params.slug} />
      <Footer />
    </NavigationEvents>
  );
}
