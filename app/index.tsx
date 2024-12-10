import ExpoWebBrowserExample from "@/components/expo-web-browser-example";
import { Text, View } from "react-native";

export default function Index() {
  const URL_PREFERENCE = 'https://www.youtube.com/@degsoft';
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <ExpoWebBrowserExample url={URL_PREFERENCE} />
    </View>
  );
}
