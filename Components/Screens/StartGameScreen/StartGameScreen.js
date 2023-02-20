import { View, TextInput } from "react-native";
import PrimaryButton from "../../global/PrimaryButton/PrimaryButton";
import { styles } from "./StartGameScreen.styles";

export default function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} maxLength={2} keyboardType='number-pad' />
      <View style={styles.btns_wrapper}>
        <View style={styles.btn}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.btn}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}
