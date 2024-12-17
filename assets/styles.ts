import { StyleSheet } from "react-native";

export const tabStyles = StyleSheet.create({
  container: {
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
  button: {
    maxWidth: 350,
    width: "100%",
    paddingVertical: 5,
    marginHorizontal: "auto",
  },
});
