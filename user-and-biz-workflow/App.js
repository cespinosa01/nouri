import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import Asks from "./src/screens/Asks";
import Feed from "./src/screens/Feed";
import Finder from "./src/screens/Finder";
import Thankyou from "./src/screens/Thankyou";
import You from "./src/screens/You";
import BisHome from "./src/screens/BisHome";
import Thankyou1 from "./src/screens/Thankyou1";
import Donate from "./src/screens/Donate";

const DrawerNavigation = createDrawerNavigator({
  Asks: Asks,
  Feed: Feed,
  Finder: Finder,
  Thankyou: Thankyou,
  You: You,
  BisHome: BisHome,
  Thankyou1: Thankyou1,
  Donate: Donate
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Asks: Asks,
    Feed: Feed,
    Finder: Finder,
    Thankyou: Thankyou,
    You: You,
    BisHome: BisHome,
    Thankyou1: Thankyou1,
    Donate: Donate
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "oswald-700": require("./src/assets/fonts/oswald-700.ttf"),
      "oswald-regular": require("./src/assets/fonts/oswald-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
