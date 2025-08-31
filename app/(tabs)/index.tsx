import FileCard from "@/Components/FileCard";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useEffect } from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../../Components/Navbar";
import "../globals.css";

export default function Index() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("./profile");
  //   }, 1000);
  // }, []);

  return (
    <SafeAreaView className="flex-1  relative items-center justify-center bg-l-primary">
      <StatusBar barStyle="default" hidden={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <View className="flex-1 items-center top-16 ">
          <View className=" items-center mt-5  w-screen overflow-hidden   h-fit">
            <ImageBackground
              source={require("@/assets/images/background.png")}
              className="w-[85%] h-32 rounded-xl overflow-hidden  justify-center"
              resizeMode="cover"
            >
              <View className=" px-10 h-16  justify-center  gap-3">
                <Text className="text-2xl  text-white font-bold">
                  Welcome Back, User
                </Text>
                <Text className=" text-white">
                  Ready to Organize your Academic files?
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View className="flex-row flex-wrap justify-between gap-5 mb-5">
            <View className="mt-10 w-[25%] h-fit  bg-l-secondary shadow-lg shadow-accent rounded-xl py-5 gap-2  items-center justify-center">
              <Feather name="trending-up" size={24} color="blue" />
              <View className=" items-center">
                <Text className="text-4xl font-bold">3</Text>
                <Text className="text-lg text-gray-600 ">Favorites</Text>
              </View>
            </View>
            <View className="mt-10 w-[25%] h-fit  bg-l-secondary shadow-lg shadow-accent rounded-xl py-5 gap-2  items-center justify-center">
              <Feather name="heart" size={24} color="red" />
              <View className=" items-center">
                <Text className="text-4xl font-bold">3</Text>
                <Text className="text-lg text-gray-600 ">Favorites</Text>
              </View>
            </View>
            <View className="mt-10 w-[25%] h-fit  bg-l-secondary shadow-lg shadow-accent rounded-xl py-5 gap-2  items-center justify-center">
              <Feather name="clock" size={24} color="green" />
              <View className=" items-center">
                <Text className="text-4xl font-bold">3</Text>
                <Text className="text-lg text-gray-600 ">Favorites</Text>
              </View>
            </View>
          </View>

          <View className="w-[85%] px-2 flex-row items-center gap-2 mb-3">
            <Feather name="clock" size={24} color="green" />
            <Text className="text-xl font-semibold text-gray-600">
              Recent Activities
            </Text>
          </View>
          <View className="w-[85%] ">
            <FlatList
              data={arr}
              renderItem={() => <FileCard />}
              keyExtractor={(item) => item.toString()}
              numColumns={1}
              className="mt-2 pb-32  flex-col"
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

