import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Navbar() {
  const [themeIcon, setThemeIcon] = useState(false);
  return (
    <View className="w-full bg-l-secondary min-h-16  flex-row absolute top-0  justify-between items-center px-4">
      <View className="flex-row items-center gap-5">
        <Text className="bg-accent text-white text-2xl py-1.5 px-3 rounded-lg">
          A
        </Text>
        <Text className="text-accent text-2xl font-semibold">AcadeX</Text>
      </View>
      <View className="flex-row items-center gap-5">
        <View className="flex-row items-center gap-2 justify-between bg-l-border border-l-border px-2 rounded-xl">
          <Feather name="search" size={14} color="black" />
          <TextInput
            placeholder="Search files "
            className=" rounded-lg py-2 px-3"
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setThemeIcon(!themeIcon);
          }}
          className="p-2 bg-l-border rounded-xl"
        >
          <Feather name={themeIcon ? "sun" : "moon"} size={14} color={"blue"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
