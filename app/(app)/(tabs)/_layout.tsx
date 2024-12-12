import { tabStyles } from "@/assets/styles";
import CustomBottomNavigation from "@/components/CustomBottomNavigation";
import CustomNavigationBar from "@/components/CustomNavigationBar";
import { Tabs } from "expo-router";
import { Image } from "react-native";
import { Icon, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppLayout() {
  const theme = useTheme();
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
          title: "Home",
          header: () => (
            <SafeAreaView
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.background,
              }}
            >
              <Image
                style={tabStyles.logo}
                source={require("@/assets/images/icon.png")}
              />
            </SafeAreaView>
          ),
          tabBarIcon: ({ size, color }) => {
            return <Icon source="cake" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="buddies"
        options={{
          title: "Buddies",
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
