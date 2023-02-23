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
    fontFamily: "open-sans-bold",
  },
  higher_lower_text: {
    color: COLORS.accent500,
    fontSize: 24,
    textAlign: "center",
  },
  logs: {},
  logItem: {
    borderColor: COLORS.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: COLORS.accent500,
    color: COLORS.white,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  round: {
    fontFamily: "open-sans",
  },
  opponent: {
    fontFamily: "open-sans",
  },
});
