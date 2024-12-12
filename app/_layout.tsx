import { SupabaseProvider } from "@/context/supabase-provider";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
import { Slot } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme({ fallbackSourceColor: "#fff" });
  const paperTheme = React.useMemo(
    () =>
      colorScheme === "dark"
        ? { ...MD3DarkTheme, colors: theme.dark }
        : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme],
  );
  return (
    <PaperProvider theme={paperTheme}>
      <SupabaseProvider>
        <Slot />
      </SupabaseProvider>
    </PaperProvider>
  );
}
