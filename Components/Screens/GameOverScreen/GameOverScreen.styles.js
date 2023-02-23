import { StyleSheet } from "react-native";
import { COLORS } from "../../../styles/variables";

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
    flexDirection: "column",
  },
  image_wrapper: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: COLORS.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary_text: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  text_highlight: {
    fontFamily: "open-sans-bold",
    color: COLORS.primary500,
  },
});
