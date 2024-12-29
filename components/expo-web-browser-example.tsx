import { StatusBar } from "expo-status-bar";
import { openBrowserAsync } from "expo-web-browser";
import {
  Button,
  StyleSheet,
  View
} from "react-native";

export default function ExpoWebBrowserExample() {
  const handleOnPress = async () => {

    const preference = {
      "items": [
        {
          "title": "Mi producto",
          "quantity": 1,
          "unit_price": 2000
        }
      ],
      "back_urls": {
        "success": "myapp://checkout/congrats",
        "failure": "myapp://checkout/failure",
        "pending": "myapp://checkout/pending"
      },
      "auto_return": "approved"
    }

    try {
      const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${String(process.env.EXPO_PUBLIC_MP_ACCESS_TOKEN)}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(preference)
      });

      const data = await response.json()
      if (!data) {
        return console.error("Ha ocurrido un error")
      }
      openBrowserAsync(data.init_point);

    } catch (error) {
      console.error(error)
    }
  }

  return (<View style={styles.container}>
    <Button
      title="Open Browser"
      onPress={handleOnPress}
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
