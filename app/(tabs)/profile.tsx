import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { tabStyles } from "@/assets/styles";

export default function Tab() {
  const theme = useTheme();
  return (
    <View
      style={{
        ...tabStyles.container,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text style={tabStyles.helperText}>All Contacts</Text>
    </View>
  );
}
