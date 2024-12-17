import CustomView from "@/components/App/Views/CustomView";
import { useSupabase } from "@/context/supabase-provider";
import * as Linking from "expo-linking";
import { router } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

WebBrowser.maybeCompleteAuthSession();

export default function Welcome() {
  const { createSessionFromUrl } = useSupabase();
  const url = Linking.useURL();
  if (url) createSessionFromUrl(url);
  return (
    <CustomView style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require("@/assets/images/welcome-image.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text variant="headlineSmall" style={styles.headlineText}>
          Gift smarter, Celebrate better
        </Text>
        <Text variant="bodyLarge" style={styles.subText}>
          Automate gifting with customizable messages and various gift options
        </Text>
        <Button
          onPress={() => router.navigate("/(app)/sign-in")}
          mode="contained"
          style={styles.button}
        >
          Get Started
        </Button>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "column",
  },
  topContainer: {
    flex: 4.5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    maxWidth: 600,
    marginTop: 50,
    resizeMode: "cover",
  },
  bottomContainer: {
    flex: 1.5,
    justifyContent: "center",
    flexDirection: "column",
  },
  headlineText: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  subText: {
    textAlign: "center",
    marginBottom: 20,
    maxWidth: 300,
    marginHorizontal: "auto",
  },
  button: {
    maxWidth: 350,
    width: "100%",
    paddingVertical: 5,
    marginHorizontal: "auto",
  },
});
