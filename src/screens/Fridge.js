import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import MaterialHelperTextBox1 from "../components/MaterialHelperTextBox1";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialCardWithImageAndTitle5 from "../components/MaterialCardWithImageAndTitle5";
import Svg, { Ellipse } from "react-native-svg";

function Fridge(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}></View>
      <View style={styles.materialHelperTextBox1StackStack}>
        <View style={styles.materialHelperTextBox1Stack}>
          <MaterialHelperTextBox1
            style={styles.materialHelperTextBox1}
          ></MaterialHelperTextBox1>
          <Image
            source={require("../assets/images/nouritop.png")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <View style={styles.icon3Stack}>
          <MaterialCommunityIconsIcon
            name="fridge"
            style={styles.icon3}
          ></MaterialCommunityIconsIcon>
          <Image
            source={require("../assets/images/fridge.jpg")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
        </View>
      </View>
      <MaterialCardWithImageAndTitle5
        annetteCooper="Jane Warren"
        subtitleHere="Donated 3 pounds of carrots"
        loremIpsum="10/06: 6:30pm"
        style={styles.materialCardWithImageAndTitle7}
      ></MaterialCardWithImageAndTitle5>
      <View style={styles.rect4Stack}>
        <View style={styles.rect4}></View>
        <Text style={styles.recentActivity}>RECENT ACTIVITY</Text>
      </View>
      <View style={styles.loremIpsum2Stack}>
        <Text style={styles.loremIpsum2}>
          Currently we are overflowing with food!
        </Text>
        <Text style={styles.lastUpdated1}>Last updated: 10/09 9am</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Announce")}
        style={styles.button2}
      >
        <Text style={styles.makeARequest}>Make a request</Text>
      </TouchableOpacity>
      <View style={styles.scrollArea2}>
        <ScrollView
          contentContainerStyle={styles.scrollArea2_contentContainerStyle}
        >
          <View style={styles.annetteCooperRow}>
            <Text style={styles.annetteCooper}>Annette Cooper</Text>
            <View style={styles.annetteCooper1Stack}>
              <Text style={styles.annetteCooper1}>10/09: 10:10am</Text>
              <Text style={styles.annetteCooper14}>10/09: 10:10am</Text>
            </View>
          </View>
          <View style={styles.annetteCooper2Stack}>
            <Text style={styles.annetteCooper2}>
              Donated 5 pounds of potatoes from Blossom
            </Text>
            <Text style={styles.annetteCooper13}>
              Donated 5 pounds of potatoes from Blossom
            </Text>
          </View>
          <View style={styles.rect6}>
            <View style={styles.arthurBellStackRow}>
              <View style={styles.arthurBellStack}>
                <Text style={styles.arthurBell}>Arthur Bell</Text>
                <Text style={styles.arthurBell1}>Arthur Bell</Text>
              </View>
              <View style={styles.annetteCooper5Stack}>
                <Text style={styles.annetteCooper5}>10/07: 11:10am</Text>
                <Text style={styles.annetteCooper19}>10/08: 12:10pm</Text>
              </View>
            </View>
            <Text style={styles.annetteCooper4}>
              Donated 5 gallons of milk from Dig Inn
            </Text>
          </View>
          <View style={styles.rect7}>
            <View style={styles.janeWarrenRow}>
              <Text style={styles.janeWarren}>Jane Warren</Text>
              <Text style={styles.annetteCooper9}>10/08: 12:10pm</Text>
            </View>
            <Text style={styles.annetteCooper7}>
              Donated 3 pounds of carrots from Dig Inn
            </Text>
          </View>
          <View style={styles.rect8}>
            <View style={styles.annetteCooper10Row}>
              <Text style={styles.annetteCooper10}>Annette Cooper</Text>
              <Text style={styles.annetteCooper20}>10/08: 12:10pm</Text>
            </View>
            <View style={styles.annetteCooper11Stack}>
              <Text style={styles.annetteCooper11}>
                Donated 5 pounds of potatoes from Blossom
              </Text>
              <Text style={styles.annetteCooper18}>
                Donated 5 pounds of potatoes from Blossom
              </Text>
            </View>
          </View>
          <View style={styles.rect9}>
            <View style={styles.janeWarren1Row}>
              <Text style={styles.janeWarren1}>Jane Warren</Text>
              <Text style={styles.annetteCooper22}>10/08: 12:10pm</Text>
            </View>
            <Text style={styles.annetteCooper21}>
              Donated 3 pounds of carrots from Dig Inn
            </Text>
          </View>
          <View style={styles.rect10}></View>
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("Deliveries")}
        style={styles.button}
      >
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 60.33 63.43" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,225,77,1)"
              cx={30}
              cy={32}
              rx={30}
              ry={32}
            ></Ellipse>
          </Svg>
          <MaterialCommunityIconsIcon
            name="fridge"
            style={styles.icon4}
          ></MaterialCommunityIconsIcon>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 100
  },
  rect: {
    flex: 0.5,
    backgroundColor: "rgba(255,255,255,1)"
  },
  materialHelperTextBox1: {
    height: 90,
    width: 204,
    position: "absolute",
    left: 105,
    top: 77
  },
  image2: {
    top: 0,
    left: 0,
    width: 108,
    height: 82,
    position: "absolute"
  },
  materialHelperTextBox1Stack: {
    top: 0,
    left: 34,
    width: 309,
    height: 167,
    position: "absolute"
  },
  icon3: {
    top: 71,
    left: 39,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 0,
    width: 0,
    opacity: 0
  },
  image: {
    top: 0,
    left: 0,
    width: 129,
    height: 125,
    position: "absolute",
    borderRadius: 100
  },
  icon3Stack: {
    top: 60,
    left: 0,
    width: 129,
    height: 125,
    position: "absolute"
  },
  materialHelperTextBox1StackStack: {
    top: 10,
    left: 16,
    width: 343,
    height: 185,
    position: "absolute"
  },
  materialCardWithImageAndTitle7: {
    height: 114,
    width: 375,
    position: "absolute",
    left: 375,
    top: 188
  },
  rect4: {
    top: 0,
    left: 0,
    width: 375,
    height: 30,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  recentActivity: {
    top: 7,
    left: 104,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  rect4Stack: {
    top: 286,
    left: 0,
    width: 375,
    height: 31,
    position: "absolute"
  },
  loremIpsum2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    width: 309,
    height: 44,
    fontSize: 16
  },
  lastUpdated1: {
    top: 43,
    left: 134,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)"
  },
  loremIpsum2Stack: {
    top: 338,
    left: 38,
    width: 309,
    height: 59,
    position: "absolute"
  },
  button2: {
    top: 223,
    left: 155,
    width: 204,
    height: 35,
    position: "absolute",
    backgroundColor: "rgba(255,225,77,1)",
    borderRadius: 21
  },
  makeARequest: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 8,
    marginLeft: 47
  },
  scrollArea2: {
    top: 406,
    left: 0,
    width: 375,
    height: 406,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea2_contentContainerStyle: {
    height: 776,
    width: 375
  },
  annetteCooper: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  annetteCooper1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)"
  },
  annetteCooper14: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)"
  },
  annetteCooper1Stack: {
    width: 101,
    height: 16,
    marginLeft: 79,
    marginTop: 4
  },
  annetteCooperRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 32,
    marginRight: 22
  },
  annetteCooper2: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  annetteCooper13: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  annetteCooper2Stack: {
    width: 320,
    height: 19,
    marginTop: 15,
    marginLeft: 33
  },
  rect6: {
    width: 375,
    height: 129,
    backgroundColor: "rgba(155,155,155,1)",
    marginTop: 45
  },
  arthurBell: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  arthurBell1: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  arthurBellStack: {
    width: 97,
    height: 24
  },
  annetteCooper5: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)"
  },
  annetteCooper19: {
    top: 0,
    left: 3,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)"
  },
  annetteCooper5Stack: {
    width: 104,
    height: 16,
    marginLeft: 123,
    marginTop: 4
  },
  arthurBellStackRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 32,
    marginRight: 19
  },
  annetteCooper4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 14,
    marginLeft: 33
  },
  rect7: {
    width: 375,
    height: 129,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 1
  },
  janeWarren: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  annetteCooper9: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    marginLeft: 107,
    marginTop: 4
  },
  janeWarrenRow: {
    height: 24,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 32,
    marginRight: 22
  },
  annetteCooper7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 15,
    marginLeft: 33
  },
  rect8: {
    width: 375,
    height: 129,
    backgroundColor: "rgba(155,155,155,1)"
  },
  annetteCooper10: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20,
    marginTop: 4
  },
  annetteCooper20: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    marginLeft: 79
  },
  annetteCooper10Row: {
    height: 28,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 32,
    marginRight: 22
  },
  annetteCooper11: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  annetteCooper18: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  annetteCooper11Stack: {
    width: 320,
    height: 19,
    marginTop: 14,
    marginLeft: 33
  },
  rect9: {
    width: 375,
    height: 129,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 1
  },
  janeWarren1: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  annetteCooper22: {
    fontFamily: "roboto-700",
    color: "rgba(155,155,155,1)",
    marginLeft: 107,
    marginTop: 4
  },
  janeWarren1Row: {
    height: 24,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 32,
    marginRight: 22
  },
  annetteCooper21: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginTop: 15,
    marginLeft: 33
  },
  rect10: {
    width: 375,
    height: 129,
    backgroundColor: "rgba(155,155,155,1)"
  },
  button: {
    top: 209,
    left: 64,
    width: 60,
    height: 63,
    position: "absolute"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 60,
    height: 63,
    position: "absolute"
  },
  icon4: {
    top: 13,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  ellipseStack: {
    width: 60,
    height: 63
  }
});

export default Fridge;
