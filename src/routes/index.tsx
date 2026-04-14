import { NavigationContainer } from "@react-navigation/native";

// import { StackRoutes } from "./StackRoutes";
import { BottomTabRoutes } from "./BottomTabRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <BottomTabRoutes />
    </NavigationContainer>
  );
}
