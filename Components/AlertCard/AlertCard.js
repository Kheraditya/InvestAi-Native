import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";
import { TouchableOpacity } from "react-native";

const white = "#ffffff";

const AlertCard = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View>
      <Modal visible={visible} onDismiss={hideModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={{
              alignSelf: "flex-start",
              marginLeft: 15,
              marginBottom: 15,
            }}
            onPress={hideModal}
          >
            <Ionicons name="arrow-back-outline" size={27} />
          </TouchableOpacity>
          <View style={styles.modalSubContainer}>
            <Image
              source={require("../../assets/drawer-cover.jpeg")}
              style={styles.cradImage}
            />
            <View>
              <Text style={styles.cardHeader}>
                Jio financial services shares hit upper circuit limit again
              </Text>
              <Text style={styles.cardText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In nam
                temporibus quibusdam modi qui tempore earum quia minima
                recusandae magnam quis harum facere, ea odio iusto aperiam
                voluptates sequi officiis.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
      {/* <TouchableOpacity style={styles.container} onPress={showModal}>
        <Text style={styles.text}>
          Data is being fetched from the backend side and being displayed here.
        </Text>
        <Image
          source={require("../../assets/drawer-cover.jpeg")}
          style={styles.image}
        />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.container2} onPress={showModal}>
        <ImageBackground
          source={require("../../assets/cloud.png")}
          style={{ marginTop: 30, height: 150 }}
        >
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={styles.containerMain}>
              <Ionicons name="pulse-outline" size={30} color={white} />
              <Text style={styles.text2}>Financial Break</Text>
            </View>

            <View style={styles.containerSub}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 15,
                }}
              >
                <Text style={styles.text}>HOT</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 15,
                }}
              >
                <Text style={styles.text}>HOT</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default AlertCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 250,
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },
  container2: {
    borderRadius: 30,
    width: "50%",
    height: 150,
    backgroundColor: "#ff7648",
    overflow: "hidden",
  },
  containerMain: {
    paddingTop: 25,
    paddingLeft: 10,
  },
  containerSub: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 65,
    width: 60,
  },
  text2: {
    fontSize: 15,
    fontWeight: "bold",
    paddingTop: 5,
    color: "#fff",
    width: "70%",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 20,
    color: "#fff",
    width: "100%",
    marginTop: 5,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 15,
  },

  cradImage: {
    width: "100%",
    height: "25%",
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: "400",
    padding: 10,
  },
  cardText: {
    fontSize: 17,
    fontWeight: "300",
    padding: 10,
  },
  modalContainer: {
    backgroundColor: "rgba(0,0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalSubContainer: {
    alignItems: "center",
    width: "92%",

    borderColor: "#000",
    borderWidth: 0.5,
    borderRadius: 10,
  },
});
