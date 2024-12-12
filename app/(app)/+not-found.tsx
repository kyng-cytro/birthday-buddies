import CustomView from "@/components/App/Views/CustomView";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function NotFound() {
  return (
    <CustomView style={styles.container}>
      <Text variant="displaySmall" style={{ fontWeight: "bold" }}>
        404
      </Text>
      <Text variant="bodyLarge">Bro you lost or something? 😂</Text>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
