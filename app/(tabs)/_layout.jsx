import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
// import "./globals.css"

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarItemStyle: {
          height: 100,
          width: 100,
          justifyContent: "center",
          backgroundColor: "#fff",
          alignItems: "center",
        },
        tabBarStyle: {
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
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
