import {
  View,
  TextInput,
  Alert,
  Text,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../../global/PrimaryButton/PrimaryButton";
import { styles } from "./StartGameScreen.styles";
import { useState } from "react";
import Title from "../../global/Title/Title";

export default function StartGameScreen({ onStartGameHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const onNumberInputHandler = (text) => {
    setEnteredNumber(text);
  };

  const onResetInputHandler = () => setEnteredNumber("");

  const onConfirmHadler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "cancel", onPress: onResetInputHandler }]
      );
      return;
    }

    onStartGameHandler(chosenNumber);
  };
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior='position'>
        <View style={styles.wrapper}>
          <Title>Guess My Number</Title>
          <View style={styles.inputContainer}>
            <Text style={styles.instructiongText}>Enter a number</Text>
            <TextInput
              style={styles.input}
              maxLength={2}
              keyboardType='numeric'
              value={enteredNumber}
              onChange={(e) => onNumberInputHandler(e.nativeEvent.text)}
            />
            <View style={styles.btns_wrapper}>
              <View style={styles.btn}>
                <PrimaryButton onPress={onResetInputHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.btn}>
                <PrimaryButton onPress={onConfirmHadler}>Confirm</PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
