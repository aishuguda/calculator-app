import React from "react";
import { StyleSheet } from "react-native";
import { Button, Text, View } from "native-base";

const KeyPad = ({ onPress }) => {
  const handlePress = (key) => {
    onPress(key);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button style={styles.button} onPress={() => handlePress("(")}>
          (
        </Button>
        <Button style={styles.button} onPress={() => handlePress(")")}>
          )
        </Button>
        <Button style={styles.button} onPress={() => handlePress("%")}>
          %
        </Button>
        <Button style={styles.button} onPress={() => handlePress("^")}>
          <Text>^</Text>
        </Button>
      </View>
      <View style={styles.row}>
        <Button style={styles.button} onPress={() => handlePress("7")}>
          <Text>7</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("8")}>
          <Text>8</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("9")}>
          <Text>9</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("÷")}>
          <Text>÷</Text>
        </Button>
      </View>
      <View style={styles.row}>
        <Button style={styles.button} onPress={() => handlePress("4")}>
          <Text>4</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("5")}>
          <Text>5</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("6")}>
          <Text>6</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("*")}>
          <Text>×</Text>
        </Button>
      </View>
      <View style={styles.row}>
        <Button style={styles.button} onPress={() => handlePress("1")}>
          <Text>1</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("2")}>
          <Text>2</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("3")}>
          <Text>3</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("-")}>
          <Text>-</Text>
        </Button>
      </View>
      <View style={styles.row}>
        <Button style={styles.button} onPress={() => handlePress("0")}>
          <Text>0</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress(".")}>
          <Text>.</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("+")}>
          <Text>+</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("=")}>
          <Text>=</Text>
        </Button>
        <Button style={styles.button} onPress={() => handlePress("C")}>
          <Text>C</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: 5,
    width: 70,
    height: 70,
    justifyContent: "center",
  },
});

export default KeyPad;
