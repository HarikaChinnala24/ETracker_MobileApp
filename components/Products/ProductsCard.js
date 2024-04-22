import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

const ProductsCard = ({ p }) => {
  const navigation = useNavigation();

  //more details btn
  const handleMoreButton = (id) => {
    navigation.navigate("productDetails", { _id: id });
  };

  //ADD TO CART
  const handleAddToCart = () => {
    alert("added to cart");
  };
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: p?.imageUrl }} />
      <Text style={styles.cardTitle}>{p?.name}</Text>
      <Text style={styles.cardDesc}>
        {p?.description.substring(0, 30)} ...more
      </Text>
      <View style={styles.BtnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleMoreButton(p._id)}
        >
          <Text style={styles.btnText}>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCart} onPress={handleAddToCart}>
          <Text style={styles.btnText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 5,
  },
  card: {
    borderWidth: 1,
    borderColor: "lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  cardImage: {
    height: 120,
    width: "100%",
    marginBottom: 10,
    resizeMode: "center",
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: "left",
  },
  BtnContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#000000",
    height: 20,
    width: 72,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnCart: {
    backgroundColor: "orange",
    height: 20,
    width: 72,
    borderRadius: 5,
    justifyContent: "center",
  },
  btnText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 8,
    fontWeight: "bold",
  },
});

export default ProductsCard;
