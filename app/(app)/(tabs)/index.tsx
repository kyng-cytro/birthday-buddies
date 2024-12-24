import { tabStyles } from "@/assets/styles";
import BirthdayCard from "@/components/App/Cards/Birthday";
import InfoCard from "@/components/App/Cards/Info";
import CustomView from "@/components/App/Views/CustomView";
import { useSupabase } from "@/context/supabase-provider";
import useOnScroll from "@/hooks/on-scroll";
import React from "react";
import { Platform } from "react-native";
import { FlatList, View } from "react-native";
import {
  AnimatedFAB,
  Button,
  SegmentedButtons,
  Text,
} from "react-native-paper";

export default function Tab() {
  const { user, signOut } = useSupabase();
  const [extended, setExtended] = React.useState(true);
  const [value, setValue] = React.useState("this-week");
  const onScroll = useOnScroll((value) => setExtended(value));
  return (
    <CustomView style={tabStyles.container}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>Hi {user?.email}</Text>
        <Button mode="text" onPress={() => signOut()}>
          Sign Out
        </Button>
      </View>
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
        extended={extended}
        style={tabStyles.fabStyle}
        onPress={() => console.log("Fab Pressed")}
      />
    </CustomView>
  );
}
