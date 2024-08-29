// import { cookies } from "next/headers";
// import Login from "./(authPage)/Login/page";
// import Dashboard from "../Admin/Dashboard/page";
// // import DashNew from "./Dashboard/DashNew";
// import DashHome from "./Dashboard/DashHome/DashHome";
// import Providers from "../auth/Providers";
// import { useSession } from "next-auth/react";
// import LoginButton from "./(authPage)/Chcek/button";

// export default function Home() {
//   const cookieStore = cookies();
//   const check = cookieStore.get("token");
//   return (
//     <>
//       <Providers>
//         <DashHome />
//         <LoginButton />
//       </Providers>
//     </>
//   );
// }

"use client";
import AuthProviders from "../auth/Providers";
import Dashboard from "./Dashboard/page";
export default function Home() {
  return <Wrap />;
}

function Wrap() {
  return (
    <AuthProviders>
      <Provide />
    </AuthProviders>
  );
}

function Provide() {
  return <Dashboard />;
}
