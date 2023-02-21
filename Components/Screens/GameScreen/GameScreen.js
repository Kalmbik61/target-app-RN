import { View, Text } from "react-native";
import { styles } from "./GameScreen.styles";
import PrimaryButton from "../../global/PrimaryButton/PrimaryButton";
import Title from "../../global/Title/Title";
import { useState } from "react";

//imitation
const generateRandomNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return rndNum;
};

export default function GameScreen({ chosenNumber }) {
  const [generatedNumber, setGeneratedNumber] = useState(
    generateRandomNumber(1, 100, chosenNumber)
  );

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.number_wrapper}>
        <Text style={styles.number_text}>{chosenNumber}</Text>
      </View>

      <View>
        <Text>Higher or lower?</Text>

        <PrimaryButton>+</PrimaryButton>
        <PrimaryButton>-</PrimaryButton>
      </View>

      <Text>LOGS</Text>
    </View>
  );
}
