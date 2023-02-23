import { Image, View, Text } from "react-native";
import Title from "../../global/Title/Title";
import { styles } from "./GameOverScreen.styles";
import PrimaryButton from "../../global/PrimaryButton/PrimaryButton";

export default function GameOverScreen({ rounds, userNumber, onRestart }) {
  return (
    <View style={styles.wrapper}>
      <Title>GAME OVER!</Title>
      <View style={styles.image_wrapper}>
        <Image
          source={require("../../../assets/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summary_text}>
        Your phone needed <Text style={styles.text_highlight}>{rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.text_highlight}>{userNumber}</Text>
      </Text>

      <PrimaryButton onPress={onRestart}>Start New Game</PrimaryButton>
    </View>
  );
}
