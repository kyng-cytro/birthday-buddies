import { StyleSheet } from "react-native";

export const tabStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    padding: 15,
    flexDirection: "column",
  },
  helperText: { fontWeight: "semibold" },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: "absolute",
  },
  scrollView: {
    flex: 1,
  },
});
