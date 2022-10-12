import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  cointainer: {
    padding: 36,
    backgroundColor: "#FFF",
    height: "100%",
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  image_mini: {
    height: 10,
    width: 20,
    marginRight: 4,
  },
  country: {
    paddingVertical: 12,
  },
  flag: {
    height: 100,
    width: 200,
  },
  info: {
    paddingVertical: 24,
  },
  fact: {
    flexDirection: "row",
  },
  secondary: {
    fontWeight: "bold",
  },
});

export default Styles;
