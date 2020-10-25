import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import CupertinoSegmentWithTwoTabs from "../components/CupertinoSegmentWithTwoTabs";
import MaterialCardWithImageAndTitle3 from "../components/MaterialCardWithImageAndTitle3";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import MaterialCardWithTextOverImage8 from "../components/MaterialCardWithTextOverImage8";
import Navmore from "../components/Navmore";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Svg, { Ellipse } from "react-native-svg";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function Feed(props) {
  return (
    <View style={styles.container}>
      <CupertinoSegmentWithTwoTabs
        upcomingPickups="Upcoming Pickups"
        upcomingPickups="Community"
        pastDonations="World"
        style={styles.cupertinoSegmentWithTwoTabs}
      ></CupertinoSegmentWithTwoTabs>
      <View style={styles.scrollArea}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <MaterialCardWithImageAndTitle3
            style={styles.materialCardWithImageAndTitle3}
          ></MaterialCardWithImageAndTitle3>
          <View style={styles.materialCardWithImageAndTitle7StackStack}>
            <View style={styles.materialCardWithImageAndTitle7Stack}>
              <MaterialCardWithImageAndTitle3
                style={styles.materialCardWithImageAndTitle7}
              ></MaterialCardWithImageAndTitle3>
              <MaterialIconTextButtonsFooter
                style={styles.materialIconTextButtonsFooter}
              ></MaterialIconTextButtonsFooter>
            </View>
            <MaterialCardWithImageAndTitle3
              style={styles.materialCardWithImageAndTitle8}
            ></MaterialCardWithImageAndTitle3>
          </View>
          <MaterialCardWithImageAndTitle3
            style={styles.materialCardWithImageAndTitle6}
          ></MaterialCardWithImageAndTitle3>
          <MaterialCardWithImageAndTitle3
            style={styles.materialCardWithImageAndTitle16}
          ></MaterialCardWithImageAndTitle3>
          <MaterialCardWithImageAndTitle3
            style={styles.materialCardWithImageAndTitle17}
          ></MaterialCardWithImageAndTitle3>
          <MaterialCardWithImageAndTitle3
            style={styles.materialCardWithImageAndTitle20}
          ></MaterialCardWithImageAndTitle3>
          <MaterialCardWithImageAndTitle3
            style={styles.materialCardWithImageAndTitle19}
          ></MaterialCardWithImageAndTitle3>
        </ScrollView>
      </View>
      <View style={styles.scrollArea2StackStack}>
        <View style={styles.scrollArea2Stack}>
          <View style={styles.scrollArea2}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={styles.scrollArea2_contentContainerStyle}
            >
              <View style={styles.materialCardWithTextOverImage8Row}>
                <MaterialCardWithTextOverImage8
                  titleStyle="Resturant Name"
                  titleStyle="Fridge Name  "
                  style={styles.materialCardWithTextOverImage8}
                ></MaterialCardWithTextOverImage8>
                <MaterialCardWithTextOverImage8
                  titleStyle="Fridge Name"
                  style={styles.materialCardWithTextOverImage19}
                ></MaterialCardWithTextOverImage8>
                <MaterialCardWithTextOverImage8
                  titleStyle="Fridge Name"
                  style={styles.materialCardWithTextOverImage20}
                ></MaterialCardWithTextOverImage8>
                <MaterialCardWithTextOverImage8
                  titleStyle="Fridge Name"
                  style={styles.materialCardWithTextOverImage21}
                ></MaterialCardWithTextOverImage8>
                <MaterialCardWithTextOverImage8
                  titleStyle="Fridge Name"
                  style={styles.materialCardWithTextOverImage22}
                ></MaterialCardWithTextOverImage8>
                <Navmore style={styles.navmore}></Navmore>
              </View>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Finder")}
            style={styles.button5}
          >
            <Navmore button="Finder" style={styles.navmore2}></Navmore>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Finder")}
            style={styles.button3}
          >
            <View style={styles.button4Stack}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Untitled3")}
                style={styles.button4}
              >
                <Text style={styles.findMoreResturants}>
                  Find more resturants
                </Text>
              </TouchableOpacity>
              <IoniconsIcon
                name="ios-arrow-round-forward"
                style={styles.icon3}
              ></IoniconsIcon>
            </View>
          </TouchableOpacity>
          <Image
            source={require("../assets/images/nouri_long.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Asks")}
          style={styles.button7}
        >
          <View style={styles.ellipse2Stack}>
            <Svg viewBox="0 0 50 50" style={styles.ellipse2}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(249,153,141,1)"
                cx={25}
                cy={25}
                rx={25}
                ry={25}
              ></Ellipse>
            </Svg>
            <FontAwesomeIcon
              name="user-circle-o"
              style={styles.icon5}
            ></FontAwesomeIcon>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollArea3}>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollArea3_contentContainerStyle}
        >
          <View style={styles.materialCardWithTextOverImage14Row}>
            <MaterialCardWithTextOverImage8
              style={styles.materialCardWithTextOverImage14}
            ></MaterialCardWithTextOverImage8>
            <MaterialCardWithTextOverImage8
              style={styles.materialCardWithTextOverImage15}
            ></MaterialCardWithTextOverImage8>
            <MaterialCardWithTextOverImage8
              style={styles.materialCardWithTextOverImage16}
            ></MaterialCardWithTextOverImage8>
            <MaterialCardWithTextOverImage8
              style={styles.materialCardWithTextOverImage18}
            ></MaterialCardWithTextOverImage8>
            <MaterialCardWithTextOverImage8
              style={styles.materialCardWithTextOverImage17}
            ></MaterialCardWithTextOverImage8>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoSegmentWithTwoTabs: {
    height: 56,
    width: 375,
    borderRadius: 21,
    backgroundColor: "rgba(15,15, 15,0)",
    marginTop: 469
  },
  scrollArea: {
    width: 375,
    height: 287
  },
  scrollArea_contentContainerStyle: {
    height: 966,
    width: 375
  },
  materialCardWithImageAndTitle3: {
    height: 115,
    width: 330,
    borderRadius: 21,
    marginLeft: 23
  },
  materialCardWithImageAndTitle7: {
    height: 115,
    width: 330,
    position: "absolute",
    left: 23,
    top: 30,
    borderRadius: 21
  },
  materialIconTextButtonsFooter: {
    position: "absolute",
    left: 0,
    top: 0,
    height: 0,
    width: 0,
    opacity: 0
  },
  materialCardWithImageAndTitle7Stack: {
    top: 93,
    left: 0,
    width: 375,
    height: 145,
    position: "absolute"
  },
  materialCardWithImageAndTitle8: {
    height: 115,
    width: 330,
    position: "absolute",
    left: 23,
    top: 0,
    borderRadius: 21
  },
  materialCardWithImageAndTitle7StackStack: {
    width: 375,
    height: 238,
    marginTop: 8
  },
  materialCardWithImageAndTitle6: {
    height: 115,
    width: 330,
    borderRadius: 21,
    marginTop: 6,
    marginLeft: 23
  },
  materialCardWithImageAndTitle16: {
    height: 115,
    width: 330,
    borderRadius: 21,
    marginTop: 10,
    marginLeft: 23
  },
  materialCardWithImageAndTitle17: {
    height: 115,
    width: 330,
    borderRadius: 21,
    marginTop: 4,
    marginLeft: 23
  },
  materialCardWithImageAndTitle20: {
    height: 115,
    width: 330,
    borderRadius: 21,
    marginTop: 4,
    marginLeft: 23
  },
  materialCardWithImageAndTitle19: {
    height: 115,
    width: 330,
    borderRadius: 21,
    marginTop: 6,
    marginLeft: 23
  },
  scrollArea2: {
    top: 85,
    left: 0,
    width: 375,
    height: 146,
    position: "absolute",
    backgroundColor: "rgba(230,230, 230,0)"
  },
  scrollArea2_contentContainerStyle: {
    width: 1453,
    height: 146,
    flexDirection: "row"
  },
  materialCardWithTextOverImage8: {
    height: 145,
    width: 243,
    borderRadius: 21
  },
  materialCardWithTextOverImage19: {
    height: 145,
    width: 243,
    borderRadius: 21,
    marginLeft: 7,
    marginTop: 1
  },
  materialCardWithTextOverImage20: {
    height: 145,
    width: 243,
    borderRadius: 21,
    marginLeft: 12
  },
  materialCardWithTextOverImage21: {
    height: 145,
    width: 243,
    borderRadius: 21,
    marginLeft: 10,
    marginTop: 1
  },
  materialCardWithTextOverImage22: {
    height: 145,
    width: 243,
    borderRadius: 21,
    marginLeft: 13,
    marginTop: 1
  },
  navmore: {
    width: 138,
    height: 43,
    marginLeft: 41,
    marginTop: 51
  },
  materialCardWithTextOverImage8Row: {
    height: 146,
    flexDirection: "row",
    flex: 1,
    marginRight: -1078,
    marginLeft: 16
  },
  button5: {
    top: 53,
    left: 31,
    width: 138,
    height: 43,
    position: "absolute"
  },
  navmore2: {
    width: 138,
    height: 43
  },
  button3: {
    top: 230,
    left: 27,
    width: 213,
    height: 43,
    position: "absolute"
  },
  button4: {
    top: 0,
    left: 0,
    width: 232,
    height: 33,
    position: "absolute"
  },
  findMoreResturants: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 12,
    marginLeft: 32
  },
  icon3: {
    top: 0,
    left: 171,
    position: "absolute",
    color: "rgba(23,5,5,1)",
    fontSize: 40
  },
  button4Stack: {
    width: 232,
    height: 43,
    marginTop: 10,
    marginLeft: -22
  },
  image: {
    top: 0,
    left: 7,
    width: 200,
    height: 68,
    position: "absolute"
  },
  scrollArea2Stack: {
    top: 12,
    left: 0,
    width: 375,
    height: 273,
    position: "absolute"
  },
  button7: {
    left: 283,
    width: 80,
    height: 80,
    position: "absolute",
    top: 0
  },
  ellipse2: {
    top: 0,
    left: 0,
    position: "absolute",
    height: 0,
    width: 0,
    opacity: 0
  },
  icon5: {
    top: 5,
    left: 5,
    position: "absolute",
    color: "rgba(249,153,141,1)",
    fontSize: 40
  },
  ellipse2Stack: {
    width: 50,
    height: 50,
    marginTop: 14,
    marginLeft: 14
  },
  scrollArea2StackStack: {
    width: 375,
    height: 285,
    marginTop: -774
  },
  scrollArea3: {
    width: 375,
    height: 146,
    backgroundColor: "rgba(230,230, 230,0)"
  },
  scrollArea3_contentContainerStyle: {
    width: 1263,
    height: 146,
    flexDirection: "row"
  },
  materialCardWithTextOverImage14: {
    height: 145,
    width: 243,
    borderRadius: 21
  },
  materialCardWithTextOverImage15: {
    height: 145,
    width: 243,
    borderRadius: 21,
    marginLeft: 8
  },
  materialCardWithTextOverImage16: {
    height: 145,
    width: 243,
    borderRadius: 21,
    marginLeft: 8
  },
  materialCardWithTextOverImage18: {
    height: 145,
    width: 243,
    borderRadius: 21,
    marginLeft: 6
  },
  materialCardWithTextOverImage17: {
    height: 145,
    width: 243,
    borderRadius: 21,
    marginLeft: 8
  },
  materialCardWithTextOverImage14Row: {
    height: 145,
    flexDirection: "row",
    flex: 1,
    marginRight: -888,
    marginLeft: 18
  }
});

export default Feed;
