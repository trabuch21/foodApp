import { Colors } from "@/src/constants/Colors";
import { Image, StyleSheet, View, Text } from "react-native";
import products from "@/assets/data/products";

const product = products[0];

import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </SafeAreaView>
  );
}

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
    width: '100%',
    aspectRatio:1
  },
  container:{
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  }
});
