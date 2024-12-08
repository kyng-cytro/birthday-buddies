import CustomBottomNavigation from "@/components/CustomBottomNavigation";
import CustomNavigationBar from "@/components/CustomNavigationBar";
import { Tabs } from "expo-router";
import { Icon } from "react-native-paper";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}
      tabBar={(props) => <CustomBottomNavigation {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Birthdays",
          tabBarIcon: ({ size, color }) => {
            return <Icon source="cake" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ size, color }) => (
            <Icon source="contacts" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ size, color }) => (
            <Icon source="chart-sankey" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Icon source="account" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
