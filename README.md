# Welcome to your React Native Expo app with Mercado Pago Checkout Pro👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

# Integrate with React Native Expo Go

In mobile application development, the need to display web content within the application often arises. For this, there are several options, among which the use of Custom Tabs (for Android) and Safari View Controller (for iOS) stand out. These technologies allow web pages to be opened in a native browser incorporated into the application, providing a smoother and more consistent browsing experience for users.

> WARNING
>
> Important
>
> Before you start integrating Checkout Pro for Mobile, you'll need to have a preference created in your backend. If you haven't already done so, go to [Create preference.](https://www.mercadopago.com.ar/developers/en/docs/checkout-pro/integrate-preferences)

In this step we will install and configure the necessary dependencies to implement **Custom Tabs** in your project developed in React Native. 

## Use of Expo-Web-Browser

This dependency provides access to the browser, in this case Custom tabs for Android. It also performs redirect handling.

To install it, run the following command in your terminal.

```bash
npx expo install expo-web-browser
```

## Implementation of Expo-Web-Browser

To implement the Expo-Web-Browser dependency, follow the example below.

```JavaScript
import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Button,
    View
} from "react-native";
import { openBrowserAsync } from "expo-web-browser";

export default function ExpoWebBrowserExample(url) {
    return (<View style={styles.container}>
        <Button
            title="Open Browser"
            onPress={() => openBrowserAsync('YOUR-URL-PREFERENCE')}
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
```

## How to return to your app

**Deep Links** are a powerful way to allow direct navigation to specific screens or sections of a mobile application.

### Create a Deep Link

From our checkout, you can configure Deep Links to return to your application, either by clicking a "Back" link or automatically after completing a successful payment flow, redirecting you back to your application.

For this, we must add the back_urls and auto_return properties when creating the payment preference, as needed.

To learn more, you can visit the documentation on [Return URLs](https://www.mercadopago.com.ar/developers/es/docs/checkout-pro/checkout-customization/user-interface/redirection).

## Application configuration to manage Deep Link 

In order to receive and manage the Deep Link, it is necessary to configure in our React Native project the scheme and path that make up the Deep Links that we receive to redirect to some part of your application.
To do this, add the following configuration to your app.json file located in the root of your file:

```JavaScript
{
    "expo": {
        "android": {
            "intentFilters": [
                {
                    "action": "VIEW",
                    "data": [
                        {
                            "scheme": "myapp",
                            "host": "checkout",
                            "pathPrefix": "/congrats"
                        }
                    ],
                    "category": [
                        "BROWSABLE",
                        "DEFAULT"
                    ]
                }
            ]
        }
    }
}
```

* In this example, the deep link expected to redirect to the app is **myapp://checkout/congrats**
* The `pathPrefix` property is **optional**

In case the project does not have a **prebuild** yet, you can test the deep link using expo go from the terminal as follows:

``` bash
# test device local url
npx uri-scheme open exp://192.168.0.7:19000/--/checkout/congrats --android
# Note: It is not required to pass the scheme in these tests
```

> Troubleshooting:

    1. Using adb shell am start:
    You can directly use the adb shell am start command to launch the intent with the URI on your desired emulator. Replace <emulator_id> with the id emulator-5554:
 
``` bash
adb devices
adb -s <emulator_id> shell am start -a android.intent.action.VIEW -d exp://127.0.0.1:8081/--/checkout/congrats
```
    2. Set ANDROID_SERIAL environment variable:
    This method tells adb which device to use by default:

``` bash
export ANDROID_SERIAL=emulator-5554
npx uri-scheme open exp://127.0.0.1:8081/--/checkout/congrats --android
```
    This sets the ANDROID_SERIAL environment variable to your emulator ID, which adb (used by uri-scheme under the hood) will pick up.


In case of running a **prebuild** of the application, you should verify that the deep link for Android has been configured in the `android/app/src/main/AndroidManifest.xml` file. The deep link must be between the activity tags.

```AndroidManifest.xml
<activity ....> 
....
<intent-filter data-generated="true">
    <action android:name="android.intent.action.VIEW"/>
    <data android:scheme="myapp" android:host="checkout" android:pathPrefix="/congrats"/> 
    <category android:name="android.intent.category.BROWSABLE"/>
    <category android:name="android.intent.category.DEFAULT"/> 
</intent-filter>
....
</activity>

```

## Deep Link reception and management

Finally, you will need to configure your React Native application to receive and manage Deep Links. This will be addressed using the react-native-inappbrowser dependency.

In the case of Android, **the closing of the custom tab is done automatically** when redirecting to a valid Deep Link. In the event that the link is not valid, no redirection action will be executed from the custom tab.

##



## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [Expo WebBrowser](https://docs.expo.dev/versions/v52.0.0/sdk/webbrowser/): A library that provides access to the system's web browser and supports handling redirects.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# Author

[YouTube](https://www.youtube.com/@degsoft)	- @degsoft

[LinkedIn](https://www.linkedin.com/in/diegoezequielguillen) - diegoezequielguillen

[X / Twitter](https://twitter.com/DeGsoft) - DeGsoft

[TikTok](https://www.tiktok.com/@degsoft) - @degsoft

[Instagram](https://www.instagram.com/degsoft) - degsoft

[Threads](https://www.threads.net/@degsoft) - @degsoft

[Facebook](https://www.facebook.com/people/DeGsoft/100093663153838) - DeGsoft

[GitHub](https://github.com/DeGsoft) - DeGsoft
