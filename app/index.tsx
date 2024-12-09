import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Button,
    View
} from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export default function Index() {
  return (
    <View style={styles.container}>
        <Button
            title="Open Browser"
            onPress={() => openBrowserAsync('https://www.civeloo.com')}
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