import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
// import "./globals.css"

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="default" hidden={false} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="Auth" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}

