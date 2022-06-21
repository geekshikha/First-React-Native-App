import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {" "}
      {/* This line of style apply only to whole div --- not gone inherit to child */}
      <Text style={styles.title}>
        {" "}
        {/* to apply styles to child wrap it with another  ----- Text TAG     */}
        <Text>Hello World!!</Text>
        <Text>First React-Native App.</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8a2be2",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white", //   THIS IS TO APPLY THE STYLE TO
  },
});
