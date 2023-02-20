import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btn_wrapper: {
    backgroundColor: "#4e0329",
    borderRadius: 28,
    elevation: 2,
    margin: 4,
    overflow: "hidden",
  },
  btn_text: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  pressed: {
    opacity: 0.75,
  },
});
