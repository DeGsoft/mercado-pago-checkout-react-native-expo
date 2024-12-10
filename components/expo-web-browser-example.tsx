import { StatusBar } from "expo-status-bar";
import { openBrowserAsync } from "expo-web-browser";
import {
  Button,
  StyleSheet,
  View
} from "react-native";

export default function ExpoWebBrowserExample(url) {
  return (<View style={styles.container}>
    <Button
      title="Open Browser"
      onPress={() => openBrowserAsync(url)}
    />
    <StatusBar style="auto" />
  </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
