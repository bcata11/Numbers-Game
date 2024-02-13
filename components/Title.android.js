import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    // borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: Colors.accent500,
    maxWidth: "80%",
    width: 300,
  },
});
