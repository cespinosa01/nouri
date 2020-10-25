import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  Switch,
  ScrollView
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialHelperTextBox1 from "../components/MaterialHelperTextBox1";

function Deliveries(props) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonStack}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Fridge")}
          style={styles.button}
        >
          <View style={styles.ellipseStack}>
            <Svg viewBox="0 0 139.14 132.37" style={styles.ellipse}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(230, 230, 230,1)"
                cx={70}
                cy={66}
                rx={70}
                ry={66}
              ></Ellipse>
            </Svg>
            <ImageBackground
              source={require("../assets/images/fridge.jpg")}
              resizeMode="cover"
              style={styles.image1}
              imageStyle={styles.image1_imageStyle}
            >
              <Icon name="fridge" style={styles.icon2}></Icon>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <Image
          source={require("../assets/images/nouritop.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
      </View>
      <Text style={styles.acceptingDonations1}>Accepting Donations?</Text>
      <Switch value={true} style={styles.switch}></Switch>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.rect3}>
            <Text style={styles.incomingDeliveries}>INCOMING DELIVERIES</Text>
          </View>
          <Text style={styles.today630Pm730Pm}>Today{"\n"}6:30PM-7:30PM</Text>
          <Text style={styles.loremIpsum3}>
            5 gallons of milk{"\n"}3 boxes of pasta
          </Text>
          <View style={styles.rect7Stack}>
            <View style={styles.rect7}>
              <Text style={styles.loremIpsum4}>
                Thursday{"\n"}7:30PM-8:30PM
              </Text>
              <Text style={styles.loremIpsum5}>
                2 pounds of tomatos{"\n"}3 loaves of sourdough
              </Text>
            </View>
            <View style={styles.rect8}>
              <Text style={styles.loremIpsum6}>
                Thursday{"\n"}7:30PM-8:30PM
              </Text>
              <Text style={styles.loremIpsum7}>
                2 gallons of milk{"\n"}3 pounds of potatoes
              </Text>
            </View>
          </View>
          <View style={styles.rect9}>
            <Text style={styles.friday530Pm630Pm}>
              Friday{"\n"}5:30PM-6:30PM
            </Text>
            <Text style={styles.loremIpsum8}>
              2 gallons of milk{"\n"}3 pounds of potatoes
            </Text>
          </View>
          <View style={styles.rect10Stack}>
            <View style={styles.rect10}>
              <Text style={styles.loremIpsum9}>
                1 pound of broccoli{"\n"}2 jars of peanut butter
              </Text>
              <Text style={styles.loremIpsum10}>
                Tuesday{"\n"}2:30PM-3:00PM
              </Text>
            </View>
            <View style={styles.rect11}>
              <Text style={styles.monday100Pm200Pm}>
                Monday{"\n"}1:00PM-2:00PM
              </Text>
              <Text style={styles.loremIpsum11}>
                1 pound of carrots{"\n"}2 boxes of pasta
              </Text>
            </View>
            <View style={styles.rect12}>
              <Text style={styles.loremIpsum12}>
                Wednesday{"\n"}2:30PM-3:00PM
              </Text>
              <Text style={styles.loremIpsum13}>
                1 pound of beets{"\n"}3 gallons of milk
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.body1}></View>
      <MaterialHelperTextBox1
        style={styles.materialHelperTextBox1}
      ></MaterialHelperTextBox1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    top: 61,
    left: 0,
    width: 139,
    height: 132,
    position: "absolute"
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 139,
    height: 132,
    position: "absolute"
  },
  image1: {
    top: 4,
    left: 5,
    width: 129,
    height: 125,
    position: "absolute",
    borderRadius: 100,
    overflow: "hidden"
  },
  image1_imageStyle: {},
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 62,
    marginLeft: 37,
    height: 0,
    width: 0,
    opacity: 0
  },
  ellipseStack: {
    width: 139,
    height: 132
  },
  image2: {
    top: 0,
    left: 37,
    width: 108,
    height: 82,
    position: "absolute"
  },
  buttonStack: {
    top: 14,
    left: 13,
    width: 145,
    height: 193,
    position: "absolute"
  },
  acceptingDonations1: {
    top: 293,
    left: 55,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  switch: {
    position: "absolute",
    top: 291,
    left: 247
  },
  scrollArea: {
    top: 406,
    left: 0,
    width: 375,
    height: 406,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  scrollArea_contentContainerStyle: {
    height: 702,
    width: 375
  },
  rect3: {
    width: 375,
    height: 60,
    backgroundColor: "#E6E6E6"
  },
  incomingDeliveries: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    marginTop: 18,
    marginLeft: 83
  },
  today630Pm730Pm: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 8,
    marginLeft: 20
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 136
  },
  rect7: {
    top: 0,
    left: 0,
    width: 375,
    height: 94,
    position: "absolute",
    backgroundColor: "rgba(252,204,198,1)"
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 10,
    marginLeft: 20
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 136
  },
  rect8: {
    top: 93,
    left: 0,
    width: 375,
    height: 88,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  loremIpsum6: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 10,
    marginLeft: 20
  },
  loremIpsum7: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 136
  },
  rect7Stack: {
    width: 375,
    height: 181,
    marginTop: 22
  },
  rect9: {
    width: 375,
    height: 94,
    backgroundColor: "rgba(252,204,198,1)"
  },
  friday530Pm630Pm: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 16,
    marginLeft: 20
  },
  loremIpsum8: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 136
  },
  rect10: {
    top: 0,
    left: 0,
    width: 375,
    height: 94,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  loremIpsum9: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 42,
    marginLeft: 137
  },
  loremIpsum10: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -64,
    marginLeft: 20
  },
  rect11: {
    top: 93,
    left: 0,
    width: 375,
    height: 94,
    position: "absolute",
    backgroundColor: "rgba(252,204,198,1)"
  },
  monday100Pm200Pm: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    marginLeft: 20
  },
  loremIpsum11: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 136
  },
  rect12: {
    top: 185,
    left: 0,
    width: 375,
    height: 88,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  loremIpsum12: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 12,
    marginLeft: 20
  },
  loremIpsum13: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 137
  },
  rect10Stack: {
    width: 375,
    height: 273
  },
  body1: {
    padding: 16
  },
  materialHelperTextBox1: {
    height: 90,
    width: 204,
    position: "absolute",
    left: 158,
    top: 96
  }
});

export default Deliveries;
