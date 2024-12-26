import { tabStyles } from "@/assets/styles";
import BirthdayCard from "@/components/App/Cards/Birthday";
import InfoCard from "@/components/App/Cards/Info";
import CustomView from "@/components/App/Views/CustomView";
import useOnScroll from "@/hooks/on-scroll";
import React from "react";
import { FlatList, Platform, View } from "react-native";
import { AnimatedFAB, SegmentedButtons, Text } from "react-native-paper";

export default function Tab() {
  const [extended, setExtended] = React.useState(true);
  const [value, setValue] = React.useState("this-week");
  const onScroll = useOnScroll((value) => setExtended(value));
  return (
    <CustomView style={tabStyles.container}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <InfoCard title="Upcoming" subtitle="This Week" value="3 Birthdays" />
        <InfoCard title="Budget" subtitle="This Month" secondary value="$250" />
      </View>
      <Text style={tabStyles.helperText}>Upcoming birthdays</Text>
      <SegmentedButtons
        value={value}
        style={{ maxWidth: 500 }}
        onValueChange={(newValue) => setValue(newValue)}
        buttons={[
          {
            value: "today",
            label: "Today",
          },
          {
            value: "this-week",
            label: "This week",
          },
          {
            value: "this-month",
            label: "This month",
          },
        ]}
      />
      <FlatList
        onScroll={onScroll}
        scrollEventThrottle={16}
        data={[...new Array(100).keys()]}
        renderItem={({ item }) => <BirthdayCard key={item} />}
        showsVerticalScrollIndicator={Platform.OS !== "web"}
      />
      <AnimatedFAB
        label="Add Birthday"
        icon="cake"
        extended={Platform.OS !== "web" && extended}
        style={tabStyles.fabStyle}
        onPress={() => console.log("Fab Pressed")}
      />
    </CustomView>
  );
}
