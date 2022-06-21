import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");

  const randomNum = useRef(Math.random()).current;

  return (
    <ScrollView style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>
      <TextInput
        value={input}
        onChangeText={(text) => setInput(text)}
        style={styles.input}
      />

      {/*
      <Image
        source={{
          uri: `https://picsum.photos/500/300?random=${randomNum}`,
        }}
        style={{ width: "100%", height: 160, marginBottom: 30 }}
      /> */}

      {[0, 1, 2, 3, 4].map((i) => {
        return (
          <TouchableOpacity onPress={() => Alert.alert("Well Done")}>
            <Image
              key={i}
              source={{
                uri: `https://picsum.photos/500/300?random=${randomNum + i}`,
              }}
              style={{ width: "100%", height: 160, marginBottom: 30 }}
            />
          </TouchableOpacity>
        );
      })}

      <View
        style={{
          borderWidth: 2,
          borderColor: "black",
          padding: 20,
          marginBottom: 30,
        }}
      >
        <Text>Hello again!</Text>
      </View>
      <Button
        onPress={() => Alert.alert("Learning RN is so easy")}
        title="Learn More"
        color="#c1262c"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

// const MyInput = ({ value, onChangeText }) => {
//   return <input value={value} onChange={(e) => onChangeText(e.target.value)} />;
// };

// const [text, setText] = useState("");

// <MyInput value={text} onChangeText={setText}/>

<MyList data={[1, 3, 4]} renderItem={(i) => <h1>{i}</h1>} />;

function MyList(props) {
  // const data = props.data // [1,3,5]
  // const renderItem = (i) => <h1>{i}</h1> // props.renderItem

  return <div>{props.data.map(props.renderItem)}</div>;
}
