import CustomView from "@/components/App/Views/CustomView";
import { router, useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { Button, Icon, Text } from "react-native-paper";

export default function CheckEmail() {
  const { email } = useLocalSearchParams<{ email?: string }>();
  return (
    <CustomView style={styles.container}>
      <Icon source="email" size={50} />
      <Text variant="titleLarge" style={{ textAlign: "center" }}>
        We sent an email to {email}
        {"\n"} Please check your inbox.
      </Text>
      <Button mode="text" onPress={() => router.navigate("/(app)/sign-in")}>
        Go to Sign In
      </Button>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
