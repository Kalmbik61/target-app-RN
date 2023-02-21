import { StyleSheet } from "react-native";
import { COLORS } from "../../../styles/variables";

export const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: COLORS.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
  },
  input: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    color: COLORS.accent500,
    textAlign: "center",
  },
  btns_wrapper: {
    flexDirection: "row",
  },
  btn: {
    flex: 1,
  },
});
