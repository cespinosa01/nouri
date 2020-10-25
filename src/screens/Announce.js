import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

function Announce(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>What is needed by the community?</Text>
        <TextInput
          placeholder="Enter description here (products, amount)"
          style={styles.placeholder}
        ></TextInput>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Fridge")}
          style={styles.button}
        >
          <Text style={styles.post}>Post!</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/nourigreen.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(152,185,130,1)"
  },
  rect: {
    width: 330,
    height: 329,
    backgroundColor: "rgba(152,185,130,1)",
    borderRadius: 21,
    marginTop: 96,
    marginLeft: 22
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 27,
    marginLeft: 11
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 180,
    width: 277,
    backgroundColor: "rgba(164,194,143,1)",
    borderRadius: 21,
    marginTop: 24,
    marginLeft: 27
  },
  button: {
    width: 145,
    height: 31,
    backgroundColor: "rgba(255,225,77,1)",
    borderRadius: 21,
    marginTop: 17,
    marginLeft: 159
  },
  post: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 5,
    marginLeft: 52
  },
  image: {
    width: 98,
    height: 77,
    marginTop: -406,
    marginLeft: 49
  }
});

export default Announce;
