import { StyleSheet, View } from "react-native";
import { Text, TouchableRipple, useTheme } from "react-native-paper";

export default function InfoCard(props: {
  title: string;
  value: string;
  subtitle: string;
  secondary?: boolean;
}) {
  const theme = useTheme();
  return (
    <TouchableRipple
      onPress={() => console.log("Card Pressed")}
      style={{
        ...styles.container,
        borderRadius: theme.roundness,
        ...(!props.secondary && {
          backgroundColor: theme.colors.primaryContainer,
        }),
        ...(props.secondary && {
          backgroundColor: theme.colors.secondaryContainer,
        }),
      }}
    >
      <View>
        <Text variant="labelLarge">{props.title}</Text>
        <Text variant="headlineSmall" style={styles.value}>
          {props.value}
        </Text>
        <Text variant="labelLarge">{props.subtitle}</Text>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 3,
    flex: 1,
    padding: 10,
  },
  value: {
    fontWeight: "bold",
  },
});
