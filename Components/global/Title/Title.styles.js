import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../../../styles/variables";

export const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: COLORS.white,
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: COLORS.white,
    padding: 12,
    maxWidth: "80%",
  },
});
