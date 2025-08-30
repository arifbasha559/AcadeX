import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function FileCard(props) {
  const [showActions, setShowActions] = useState(false);
  const tag = [1, 2, 3];

  

  return (
    <View className="bg-l-secondary max-h-32 m-2 p-4 gap-2 justify-between rounded-lg w-full flex-row items-center">
      {/* File Icon */}
      <View>
        <Feather name="file-text" size={24} color="blue" />
      </View>

      {/* File Details */}
      <View className="flex-1 px-2">
        <Text className="text-lg font-semibold">File Name</Text>

        {/* Size + Type row */}
        <View className="flex-row items-center">
          <Text className="text-sm font-light">4.5MB</Text>
          <Entypo name="dot-single" size={14} color="gray" />
          <Text className="text-sm font-light">File Type</Text>
        </View>

        {/* Tags */}
        <View className="flex-row gap-2 mt-1">
          {tag.map((item) => (
            <Text
              key={item}
              className="text-sm bg-blue-500/10 px-2 py-1 rounded-lg font-light"
            >
              Tag {item}
            </Text>
          ))}
        </View>
      </View>

      {/* Favorite Icon */}
      {props.favs ? (
        <AntDesign name="heart" size={18} color="red" />
      ) : (
        <AntDesign name="hearto" size={18} color="gray" />
      )}

      {/* More Actions */}
      <TouchableOpacity
        className=" h-full"
        onPress={() => setShowActions(!showActions)}
      >
        <Feather
          name="more-horizontal"
          size={18}
          color="gray"
          className="my-auto"
        />
      </TouchableOpacity>

      {/* Show extra icons when toggled */}
      {showActions && (
        <View className="flex-row gap-3 ml-2">
          <AntDesign name="edit" size={18} color="blue" />
          <AntDesign name="delete" size={18} color="red" />
          <Feather name="share-2" size={18} color="green" />
        </View>
      )}
    </View>
  );
}
