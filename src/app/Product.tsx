import { useRoute } from "@react-navigation/native";
import { View } from "react-native";

import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";

import type { BottomTabRoutesProps } from "@/routes/BottomRoutes";

type ProductRouteProps = BottomTabRoutesProps<"product">;

export function Product({ navigation }: BottomTabRoutesProps<"product">) {
  const { params } = useRoute<ProductRouteProps["route"]>();

  return (
    <View style={{ flex: 1, padding: 32, paddingTop: 54 }}>
      <Header>
        <ButtonIcon
          name="arrow-circle-left"
          onPress={() => navigation.goBack()}
        />
        <Title>Product {params?.id}</Title>
      </Header>
    </View>
  );
}
