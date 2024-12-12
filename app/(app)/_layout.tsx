import CustomView from "@/components/App/Views/CustomView";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, useColorScheme, View } from "react-native";
import { useTheme } from "react-native-paper";

export const unstable_settings = {
  initialRouteName: "(root)",
};

export default function AppLayout() {
  const theme = useTheme();
  const colorScheme = useColorScheme();
  return (
    <CustomView style={{ ...styles.outerContainer }}>
      <View style={styles.innerContainer}>
        <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />
        <Stack
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
        >
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="welcome" />
          <Stack.Screen
            name="sign-in"
            options={{
              headerShown: true,
              presentation: "modal",
              gestureEnabled: true,
              headerTitle: "Get Started",
              headerBackVisible: false,
              headerStyle: {
                backgroundColor: theme.colors.background,
              },
              headerTintColor: theme.colors.onBackground,
            }}
          />
        </Stack>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    width: "100%",
    ...(Platform.OS === "web" && {
      maxWidth: 1200,
      marginHorizontal: "auto",
    }),
  },
});
