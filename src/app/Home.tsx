import { View } from "react-native";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";

import type { BottomTabRoutesProps } from "@/routes/BottomRoutes";

export function Home({ navigation }: BottomTabRoutesProps<"home">) {
  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <Title>Home</Title>
        <ButtonIcon
          name="add-circle"
          onPress={() => navigation.navigate("product", { id: "1" })}
        />
      </Header>
    </View>
  );
}
