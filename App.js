import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./Components/Screens/StartGameScreen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Components/Screens/GameScreen/GameScreen";
import { COLORS } from "./styles/variables";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  const onStartGameHandler = (pickedNumber) => setUserNumber(pickedNumber);

  const currentScreen = !!userNumber ? (
    <GameScreen chosenNumber={userNumber} />
  ) : (
    <StartGameScreen onStartGameHandler={onStartGameHandler} />
  );

  return (
    <LinearGradient style={styles.container} colors={COLORS.linear}>
      <ImageBackground
        source={require("./assets/111.png")}
        resizeMode='cover'
        style={styles.image}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView>{currentScreen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
