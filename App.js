import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Button } from "native-base";
import { useFonts } from "@expo-google-fonts/inter";

let itemArray = new Array(9).fill("empty");

export default function App() {
  const [isX, setIsX] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  drawItem = (itemNumber) => {
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = isX;
      setIsX(!itemArray[itemNumber])
    }
  };

  // chooseItemIcon = () => {};

  // chooseItemColor = () => {};

  // resetGame = () => {};

  // winGame = () => {};

  return (
    <View style={styles.container}>
      <Text>Tic Tac Toe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    padding: 10,
  },
});
