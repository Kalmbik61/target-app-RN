import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./Components/Screens/StartGameScreen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Components/Screens/GameScreen/GameScreen";
import { COLORS } from "./styles/variables";
import GameOverScreen from "./Components/Screens/GameOverScreen/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [rounds, setRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const onStartGameHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const onGameOverHandler = () => setGameIsOver(true);

  const onStartNewGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(false);
    setRounds(0);
  };

  const currentScreen = gameIsOver ? (
    <GameOverScreen
      userNumber={userNumber}
      rounds={rounds}
      onRestart={onStartNewGameHandler}
    />
  ) : !!userNumber ? (
    <GameScreen
      chosenNumber={userNumber}
      onGameOverHandler={onGameOverHandler}
      setRounds={setRounds}
    />
  ) : (
    <StartGameScreen onStartGameHandler={onStartGameHandler} />
  );

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style='light' />
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
    </>
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
