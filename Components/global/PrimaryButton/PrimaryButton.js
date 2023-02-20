import { View, Text, Pressable } from "react-native";
import { styles } from "./PrimaryButton.styles";

export default function PrimaryButton({ children, ...props }) {
  const onPressBtn = () => {
    console.log("btn pressed");
  };

  return (
    <View style={styles.btn_wrapper}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPressBtn}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.btn_text}>{children}</Text>
      </Pressable>
    </View>
  );
}
