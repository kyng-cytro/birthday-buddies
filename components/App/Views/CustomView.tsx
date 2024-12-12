import { View } from "react-native";
import { useTheme } from "react-native-paper";

export default function CustomView(props: View["props"]) {
  const theme = useTheme();
  return (
    <View
      {...props}
      style={{
        ...(props.style as object),
        backgroundColor: theme.colors.background,
      }}
    ></View>
  );
}
