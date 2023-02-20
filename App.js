import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./Components/Screens/StartGameScreen/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient style={styles.container} colors={["#4e0329", "#ddb52f"]}>
      <ImageBackground
        source={require("./assets/111.png")}
        resizeMode='cover'
        style={styles.image}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  image: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
