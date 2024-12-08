import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, useColorScheme, View } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme({ fallbackSourceColor: "orange" });
  const paperTheme = React.useMemo(
    () =>
      colorScheme === "dark"
        ? { ...MD3DarkTheme, colors: theme.dark }
        : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme],
  );
  const backgroundColor = paperTheme.colors.background;
  return (
    <PaperProvider theme={paperTheme}>
      <View style={{ ...styles.outerContainer, backgroundColor }}>
        <View style={styles.innerContainer}>
          <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
          </Stack>
        </View>
      </View>
    </PaperProvider>
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
