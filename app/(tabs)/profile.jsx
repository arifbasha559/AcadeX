import userImage from "@/assets/images/background.png";
import Navbar from "@/Components/Navbar";
import { Feather } from "@expo/vector-icons";
import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function profile() {
  return (
    <SafeAreaView className="flex-1  relative items-center min-h-screen justify-center bg-l-primary">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <View className="flex-1 items-center top-16 ">
          <View className=" mt-5  items-center w-screen overflow-hidden   h-fit">
            <View className=" px- h-16 w-[85%] justify-center items-start  gap-3">
              <View className="flex-row items-center gap-3">
                <Feather name="user" size={24} color="blue" />
                <Text className="text-3xl   font-bold">Profile</Text>
              </View>
            </View>
            <View className="w-[85%] bg-l-secondary p-4 shadow-lg shadow-accent rounded-lg mt-5">
              <View className="flex-row items-center gap-3">
                <Image
                  source={userImage}
                  className="size-16 rounded-full overflow-hidden"
                />
                <View className="px-10">
                  <Text className="text-2xl font-bold mt-2 ">John Doe</Text>
                  <Text className="text-base font-extralight mt-2 ">
                    jhondoe@example.com
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-around">
                <View className="mt-4 size-[30vw] items-center rounded-lg bg-blue-500/10 justify-center">
                  <Feather name="book-open" size={24} color="blue" />
                  <Text className="text-xl font-semibold mt-2">11</Text>
                  <Text className="text-lg font-light">Total Files.</Text>
                </View>
                <View className="mt-4 size-[30vw] items-center rounded-lg bg-green-500/10 justify-center">
                  <Feather name="book-open" size={24} color="green" />
                  <Text className="text-xl font-semibold mt-2">5</Text>
                  <Text className="text-lg font-light">Total Semesters</Text>
                </View>
              </View>
            </View>
            <Text className="text-2xl font-bold text-black text-start w-[85%] mt-5">
              Settings
            </Text>
            <View className="w-[85%] bg-l-secondary p-4 shadow-lg shadow-accent rounded-lg my-5">
              <View className="flex-row items-center gap-3">
                <Feather name='settings' size={16} color={"black"}/>
                  <Text className="text-xl  ">App Settings</Text>
                
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
