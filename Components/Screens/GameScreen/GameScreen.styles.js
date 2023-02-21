import { StyleSheet } from "react-native";
import { COLORS } from "../../../styles/variables";

export const styles = StyleSheet.create({
  screen: {
    padding: 24,
  },
  number_wrapper: {
    borderWidth: 4,
    borderColor: COLORS.accent500,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number_text: {
    color: COLORS.accent500,
    fontSize: 36,
    fontWeight: "bold",
  },
});
