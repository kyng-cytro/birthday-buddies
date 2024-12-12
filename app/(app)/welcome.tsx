import CustomView from "@/components/App/Views/CustomView";
import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";

export default function Welcome() {
  const theme = useTheme();
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
          style={{
            ...styles.button,
            backgroundColor: theme.colors.onBackground,
          }}
        >
          Get Started
        </Button>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  topContainer: {
    flex: 4.5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "90%",
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
