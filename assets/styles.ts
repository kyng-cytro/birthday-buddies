import { StyleSheet } from "react-native";

export const tabStyles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    padding: 15,
    flexDirection: "column",
  },
  logo: {
    width: 120,
    height: 120,
    objectFit: "contain",
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
