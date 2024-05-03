import { Suspense } from "react";
import { NavigationEvents } from "./Helper/navigationHelper";
import Constant from "./constant/constant";

export default function Home() {
  // return <Constant />;
  // const navigation = NavigationEvents.useNavigation();
  // const cursor = Cursor.useCursor();
  return (
    <Suspense fallback={null}>
      <NavigationEvents>
        <Constant />
      </NavigationEvents>
    </Suspense>
  );
}
