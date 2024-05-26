import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import products from "@assets/data/products";
import { defaultPizzaImage } from "@/components/ProductListItem";
import { useState } from "react";
import Button from "@/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((product) => product.id.toString() === id);

  const [selectedSize, setSelectedSize] = useState('M');

  const addToCart = () => {
    console.warn("Adding to cart, size: ", selectedSize);
  }

  if (!product) {
    return <Text>Product not found</Text>;
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name }} />
      <Image
        source={{ uri: product.image || defaultPizzaImage }}
        style={styles.image}
      />
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable onPress={()=>{setSelectedSize(size)}} style={[styles.size, {backgroundColor: selectedSize === size ? 'gainsboro' : 'white'}]} key={size}>
            <Text style={[styles.sizeText, {color:selectedSize === size ? 'black' : 'gray'}]}>{size}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>Price: ${product.price}</Text>

      <Button text="Add to Cart" onPress={addToCart}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1, //take all the available space
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 'auto',
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  size: {
    backgroundColor: "gainsboro",
    borderRadius: 25,
    width:50,
    aspectRatio:1,
    alignItems:'center',
    justifyContent:'center'

  },
  sizeText: {
    fontSize: 20,
    fontWeight:'500'
  },
});

export default ProductDetailsScreen;
