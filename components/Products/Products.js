import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ProductsCard from "./ProductsCard";
import { ProductsData } from "../../data/ProductsData";

const Products = () => {
  return (
    <View style={styles.container}>
      {ProductsData.map((p) => (
        <ProductsCard key={p._id} p={p} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Products;
