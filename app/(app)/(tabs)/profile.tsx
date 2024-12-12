import { tabStyles } from "@/assets/styles";
import CustomView from "@/components/App/Views/CustomView";
import { Text } from "react-native-paper";

export default function Tab() {
  return (
    <CustomView style={tabStyles.container}>
      <Text style={tabStyles.helperText}>All Contacts</Text>
    </CustomView>
  );
}
