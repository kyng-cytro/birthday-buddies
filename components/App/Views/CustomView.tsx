import { View } from "react-native";
import { useTheme } from "react-native-paper";

export default function CustomView(props: View["props"]) {
  const theme = useTheme();
  return (
    <View
      {...props}
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        ...(props.style as object),
      }}
    ></View>
  );
}
