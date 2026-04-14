import { MaterialIcons } from "@expo/vector-icons";
import {
  type BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type BottomTabRoutesList = {
  home: undefined;
  product: undefined | { id: string };
};

export type BottomTabRoutesProps<T extends keyof BottomTabRoutesList> =
  BottomTabScreenProps<BottomTabRoutesList, T>;

const BottomTab = createBottomTabNavigator<BottomTabRoutesList>();

export function BottomTabRoutes() {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2c46b1",
        tabBarInactiveTintColor: "#444444",
        tabBarLabelPosition: "beside-icon",
      }}
    >
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="product"
        component={Product}
        options={{
          tabBarLabel: "Product",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="add-circle" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
