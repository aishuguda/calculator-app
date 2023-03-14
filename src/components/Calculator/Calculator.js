import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "native-base";
import KeyPad from "../KeyPad/KeyPad";
import * as math from "mathjs";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  //Write function to handle input of the calculator and update the expression state
  const handlePress = (key) => {
    if (expression === "Error") {
      setExpression(key);
      return;
    }

    switch (key) {
      case "=":
        let result = "";
        try {
          console.log(expression, "expression");
          result = math.evaluate(expression);
        } catch (error) {
          console.log(error, "error");
          result = "Error";
        }
        setExpression(result);
        break;
      case "C":
        setExpression("");
        break;
      case "DEL":
        let text = expression.split("");
        text.pop();
        setExpression(text.join(""));
        break;
      default:
        setExpression(expression + key);
    }
  };
  console.log(expression, "expression");
  return (
    <Container style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{expression}</Text>
      </View>
      <KeyPad onPress={handlePress} />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  resultContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Calculator;
