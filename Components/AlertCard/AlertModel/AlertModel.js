import { StyleSheet, Text, View, Modal, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AlertCard from "../AlertCard";

const AlertModel = () => {
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
              source={require("../../../assets/drawer-cover.jpeg")}
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
      <TouchableOpacity onPress={showModal}>
        <AlertCard />
      </TouchableOpacity>
      <AlertCard />
      <AlertCard />
      <AlertCard />
      <AlertCard />
      <AlertCard />
    </View>
  );
};

export default AlertModel;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "auto",
    display: "flex",
    flexDirection: "row",
    marginBottom: 5,
    marginLeft: 3,
    marginRight: 3,

    justifyContent: "space-between",
    backgroundColor: "#F6F6DB",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "300",
    paddingRight: 10,
    paddingLeft: 15,
    width: 300,
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
