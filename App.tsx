import { Text, View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#24BFA5",
        padding: 24,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#fdfcfe", fontSize: 24, fontWeight: "bold" }}>
        Bem-vindo ao New Meca
      </Text>
    </View>
  );
}
