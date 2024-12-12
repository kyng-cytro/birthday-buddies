import CustomView from "@/components/App/Views/CustomView";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function SignIn() {
  return (
    <CustomView style={styles.container}>
      <Text>Sign In</Text>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
