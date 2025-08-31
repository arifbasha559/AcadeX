import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View } from "react-native";
// import "./globals.css"

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          position: "absolute",
          // overflow: "hidden",
          borderWidth: 1,
          backgroundColor: "#fff", // Set background only for the tab bar
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="semesters"
        options={{
          headerShown: false,
          title: "Semesters",
          tabBarIcon: ({ color }) => (
            <Feather name="book-open" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="upload"
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          // title: "Upload",
          tabBarIcon: ({ focused }) => (
            <View
              className={`  ${"bg-accent"}  rounded-full  h-16 w-16  items-center justify-center  -mt-6  shadow-lg
        `}
            >
              <Feather name="plus" size={32} color="#fff" />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="favs"
        options={{
          headerShown: false,
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
