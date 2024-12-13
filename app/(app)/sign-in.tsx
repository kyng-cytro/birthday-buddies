import CustomView from "@/components/App/Views/CustomView";
import { useSupabase } from "@/context/supabase-provider";
import { makeRedirectUri } from "expo-auth-session";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-paper";

WebBrowser.maybeCompleteAuthSession();
const redirectTo = makeRedirectUri({ path: "sign-in" });
export default function SignIn() {
  const { sendMagicLink, createSessionFromUrl } = useSupabase();
  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);
  return (
    <CustomView style={styles.container}>
      <Text>{redirectTo}</Text>
      <Button
        mode="text"
        onPress={() => sendMagicLink("cytro@duck.com", redirectTo)}
      >
        Sign In
      </Button>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
