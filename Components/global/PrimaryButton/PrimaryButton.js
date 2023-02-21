import { View, Text, Pressable } from "react-native";
import { styles } from "./PrimaryButton.styles";
import { COLORS } from "../../../styles/variables";

export default function PrimaryButton({ children, onPress, ...props }) {
  return (
    <View style={styles.btn_wrapper}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
        android_ripple={{ color: COLORS.primary600 }}
      >
        <Text style={styles.btn_text}>{children}</Text>
      </Pressable>
    </View>
  );
}
