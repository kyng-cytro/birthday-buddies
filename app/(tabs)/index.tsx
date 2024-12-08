import { tabStyles } from "@/assets/styles";
import CustomCard from "@/components/App/Card";
import useOnScroll from "@/hooks/on-scroll";
import React from "react";
import { ScrollView, View } from "react-native";
import {
  AnimatedFAB,
  SegmentedButtons,
  Text,
  useTheme,
} from "react-native-paper";

export default function Tab() {
  const theme = useTheme();
  const [value, setValue] = React.useState("this-week");
  const [extended, setExtended] = React.useState(true);
  const onScroll = useOnScroll((value) => setExtended(value));
  return (
    <View
      style={{
        ...tabStyles.container,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text style={tabStyles.helperText}>Upcoming birthdays</Text>
      <SegmentedButtons
        value={value}
        style={{ maxWidth: 500 }}
        onValueChange={(newValue) => setValue(newValue)}
        buttons={[
          {
            value: "this-week",
            label: "This week",
          },
          {
            value: "this-month",
            label: "This month",
          },
          {
            value: "all-time",
            label: "All time",
          },
        ]}
      />
      <ScrollView
        style={tabStyles.scrollView}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {[...new Array(100).keys()].map((_, i) => (
          <CustomCard key={i} />
        ))}
      </ScrollView>
      <AnimatedFAB
        label="Add Birthday"
        icon="cake"
        extended={extended}
        style={tabStyles.fabStyle}
        onPress={() => console.log("Fab Pressed")}
      />
    </View>
  );
}
