import FileCard from "@/Components/FileCard";
import Navbar from "@/Components/Navbar";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function favs() {
  const sems = [1, 2, 3, 4, 5, 6];
  const storageManager = async (users) => {
    await AsyncStorage.setItem("user", JSON.stringify(users));

    // Get data
    const user = await AsyncStorage.getItem("user");
    console.log("adsa");
    
    console.log(JSON.parse(user));

    // Remove data
  };
  storageManager("aadad");
  return (
    <SafeAreaView className="flex-1  relative items-center justify-center bg-l-primary">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <View className="flex-1 items-center top-16 ">
          <View className=" mt-5  items-center w-screen overflow-hidden   h-fit">
            <View className=" px- h-16 w-[85%] justify-center items-start  gap-3">
              <View className="flex-row items-center gap-3">
                <Feather name="calendar" size={24} color="blue" />
                <Text className="text-3xl   font-bold">Favorites</Text>
              </View>
              <Text className=" text-gray-700">
                Your favorite Files at a glance.
              </Text>
            </View>
          </View>

          <View className="w-[85%] mt-5">
             <FlatList
              data={sems}
              renderItem={() => <FileCard favs={true} />}
              keyExtractor={(item) => item.toString()}
              numColumns={1}
              className="mt-2 pb-32 gap-5 flex-col"
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
