import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("Click on the Goat");
  const [selectedPlayer, setSelectedPlayer] = useState("");

  function showResult(message, player) {
    setTitle(message);
    setSelectedPlayer(player);

    setTimeout(() => {
      setTitle("Click on the Goat");
      setSelectedPlayer("");
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text
        style={[
          styles.title,
          selectedPlayer === "Messi" && styles.messiTitle,
          selectedPlayer === "Ronaldo" && styles.ronaldoTitle,
        ]}
      >
        {title}
      </Text>
      <View style={styles.players}>
        <Player
          player_name="Messi"
          img_src="https://people.com/thmb/kAIqAPtvX6Ks6ZKtk2h2C-iqSlc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2)/lionel-messi-world-cup-loss-072026-1-90d3b0ed415241e09524cbb48060ef12.jpg"
          onPress={() => showResult("Correcto", "Messi")}
        />
        <Player
          player_name="Ronaldo"
          img_src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-12/Fjodjh5XwAEG79K.jpg.png?itok=joFSAFsd"
          onPress={() => showResult("Wrong", "Ronaldo")}
        />
      </View>
    </View>
  );
}

function Player({ player_name, img_src, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.player, pressed && styles.pressed]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={player_name}
    >
      <Image source={{ uri: img_src }} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  messiTitle: {
    color: "green",
  },
  ronaldoTitle: {
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  players: {
    flexDirection: "row",
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  player: {
    alignItems: "center",
  },
  pressed: {
    opacity: 0.6,
  },
  image: {
    width: 100,
    height: 100,
  },
});
