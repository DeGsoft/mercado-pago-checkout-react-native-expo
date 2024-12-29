import ExpoWebBrowserExample from "@/components/expo-web-browser-example";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Mercado Pago Checkout Pro React Native Expo</Text>
      <ExpoWebBrowserExample />
    </View>
  );
}
