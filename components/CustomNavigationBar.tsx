import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { getHeaderTitle } from "@react-navigation/elements";
import React from "react";
import { Appbar, useTheme } from "react-native-paper";

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
    <Appbar.Header mode="medium">
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content
        title={title}
        titleStyle={{
          ...theme.fonts.headlineLarge,
          fontWeight: "bold",
        }}
      />
    </Appbar.Header>
  );
}
