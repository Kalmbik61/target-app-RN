import { View, Text, Alert, FlatList, useWindowDimensions } from "react-native";
import { styles } from "./GameScreen.styles";
import PrimaryButton from "../../global/PrimaryButton/PrimaryButton";
import Title from "../../global/Title/Title";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../styles/variables";

//imitation
const generateRandomNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }
  return rndNum;
};

let minBoundry = 1;
let maxBoundry = 100;

export default function GameScreen({
  chosenNumber,
  onGameOverHandler,
  setRounds,
}) {
  const [generatedNumber, setGeneratedNumber] = useState(
    generateRandomNumber(1, 100, chosenNumber)
  );
  const [logs, setLogs] = useState([generatedNumber]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && generatedNumber < chosenNumber) ||
      (direction === "greater" && generatedNumber > chosenNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = generatedNumber - 1;
    } else {
      minBoundry = generatedNumber + 1;
    }
    const newRandom = generateRandomNumber(
      minBoundry,
      maxBoundry,
      generatedNumber
    );
    setGeneratedNumber(newRandom);
    setRounds((prev) => prev + 1);
    setLogs((prev) => [newRandom, ...prev]);
  };

  useEffect(() => {
    if (generatedNumber === chosenNumber) {
      onGameOverHandler();
    }
  }, [generatedNumber, chosenNumber, onGameOverHandler]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View style={styles.number_wrapper}>
        <Text style={styles.number_text}>{generatedNumber}</Text>
      </View>
      <View>
        <Text style={styles.higher_lower_text}>Higher or lower?</Text>

        <View>
          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            <Ionicons name='md-remove' size={24} color={COLORS.white} />
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Ionicons name='md-add' size={24} color={COLORS.white} />
          </PrimaryButton>
        </View>
      </View>

      <View style={styles.logs}>
        <FlatList
          data={logs}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <View style={styles.logItem}>
              <Text style={styles.round}>#{logs.length - index}</Text>
              <Text style={styles.opponent}>Opponent's Guess: {item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
