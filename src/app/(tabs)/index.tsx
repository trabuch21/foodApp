import {  FlatList } from "react-native";
import ProductListItem from "@components/ProductListItem";
import products from "@assets/data/products";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        numColumns={2}
        contentContainerStyle={{ gap:10, padding: 10 }}
        columnWrapperStyle={{ gap: 10}}
      />
    </SafeAreaView>
  );
}
