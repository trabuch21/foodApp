import { View } from "react-native";
import products from "@/assets/data/products";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <ProductListItem product={products[0]} />
        <ProductListItem product={products[1]} />
      </View>
    </SafeAreaView>
  );
}
