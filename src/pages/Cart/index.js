import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text>Página Carrinho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
