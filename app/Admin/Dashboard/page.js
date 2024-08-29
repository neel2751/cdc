"use client";
import Content from "../Components/Content";
// import Dash from "./Dash";
import DashAside from "../Components/DashAside/DashAside";
import HeaderStatic from "../Components/Helper/HeaderStatic";
import MainHeader from "../Components/Helper/MainHeader";
import Tagtable from "../Components/TagTable/Tagtable";
import Dash from "./Dash";
import DashHome from "./DashHome/DashHome";
import Sections from "./DashHome/Sections";
import DashNav from "./DashNav/DashNav";
import DashNew from "./DashNew";
import AllService from "./DashServices/AllService";
import AdminServices from "./DashServices/page";
import LogoUpload from "./LogoCloudUpload/page";
import Team from "./Team/Team";
import Teampage from "./Team/page";

export default function Home() {
  return (
    <>
      <DashNav />
      <Content>
        <Teampage />
        {/* <Team /> */}
      </Content>
    </>
  );
}
