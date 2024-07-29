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
import { SessionProvider, useSession } from "next-auth/react";
import Chcek from "./(authPage)/Chcek/page";
import Dashboard from "./Dashboard/page";
import { Suspense } from "react";

// import Dashboard from "./Dashboard/page";

export default function Home() {
  return <Wrap />;
}

function Wrap() {
  return (
    <SessionProvider>
      <Provide />
    </SessionProvider>
  );
}

function Provide() {
  const { status } = useSession();
  // if (status === "loading") {
  //   return <div>Loading...</div>;
  // }
  if (status === "unauthenticated") {
    return <Chcek />;
  }
  return <Dashboard />;
}
