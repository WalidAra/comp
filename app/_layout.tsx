import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/components/useColorScheme";
import { NativeBaseProvider } from "native-base";
import COLORS from "@/constants/public/COLORS";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    DMbold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMmedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMregular: require("../assets/fonts/DMSans-Regular.ttf"),
    DancingScriptBold: require("../assets/Dancing_Script/static/DancingScript-Bold.ttf"),
    DancingScriptMedium: require("../assets/Dancing_Script/static/DancingScript-Medium.ttf"),
    DancingScriptRegular: require("../assets/Dancing_Script/static/DancingScript-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NativeBaseProvider>
        <Stack initialRouteName="index">
          <Stack.Screen
            name="index"
            options={{
              headerShadowVisible: false,
              headerTitle: "",
              headerStyle: {
                backgroundColor: COLORS.white,
              },
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="login/Login"
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="signup/SignUp"
            options={{ headerShown: false, presentation: "modal" }}
          />
          <Stack.Screen
            name="EditProfile/EditProfile"
            options={{
              headerShadowVisible:false,
              headerStyle:{backgroundColor: COLORS.white},
              headerShown: true,
              presentation: "modal",
              headerTitle: "",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => {
                    router.back();
                  }}
                  // style={{ paddingHorizontal: 20 }}
                >
                  <Ionicons name="arrow-back-sharp" size={25} color="black" />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen name="home" options={{ headerShown: false }} />
        </Stack>
      </NativeBaseProvider>
    </ThemeProvider>
  );
}
