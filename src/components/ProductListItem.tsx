import { Colors } from "@/constants/Colors";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { Product } from "../types";
import { Link } from "expo-router";

type ProductListItemProps = {
  product: Product;
};

export const defaultPizzaImage =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable  style={styles.container}>
        <Image
          source={{ uri: product.image || defaultPizzaImage }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
      
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    fontWeight: "bold",
    color: Colors.light.tint,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    maxWidth: "50%",
  },
});
