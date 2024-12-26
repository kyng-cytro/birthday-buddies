import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import React from "react";
import { Platform } from "react-native";
import { Appbar, useTheme } from "react-native-paper";

const MORE_ICON = Platform.OS === "ios" ? "dots-horizontal" : "dots-vertical";

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}: {
  navigation: BottomTabHeaderProps["navigation"];
  route: BottomTabHeaderProps["route"];
  options: BottomTabHeaderProps["options"];
  back?: boolean;
}) {
  const theme = useTheme();
  const title = getHeaderTitle(options, route.name);
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content
        title={title}
        titleStyle={{
          ...theme.fonts.headlineLarge,
          ...(route.name === "index" && { fontWeight: "bold" }),
        }}
      />
      <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
    </Appbar.Header>
  );
}
