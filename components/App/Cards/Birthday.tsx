import { StyleSheet, View } from "react-native";
import { Avatar, Text, TouchableRipple, useTheme } from "react-native-paper";

export default function BirthdayCard() {
  const theme = useTheme();
  return (
    <TouchableRipple onPress={() => console.log("Card Pressed")}>
      <View
        style={{
          ...styles.container,
          borderRadius: theme.roundness,
        }}
      >
        <Avatar.Text label="A" size={50} />
        <View style={styles.textContainer}>
          <Text variant="titleMedium">John Doe's 24th Birthday</Text>
          <Text variant="labelMedium">
            Today is his 24th birthday 🎉, We will automatically send him a
            birthday card and $20 gift card.
          </Text>
        </View>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
});
