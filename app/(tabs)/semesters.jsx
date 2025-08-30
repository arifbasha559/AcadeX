import Navbar from "@/Components/Navbar";
import { AntDesign, Feather } from "@expo/vector-icons";
import { FlatList, SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

const Semester = () => {
  return (
    <View className="w-full mt-5 bg-l-secondary p-4  flex-row justify-between shadow-lg shadow-accent items-center rounded-lg  gap-3">
      <Feather
        name="book-open"
        size={24}
        color="white"
        className="bg-accent p-2 rounded-lg"
      />
      <View className="flex-1 px-2">
        <Text className="text-lg font-semibold">Semester 1</Text>
        <View className="flex-row gap-4">
          <Feather name="book-open" size={16} color="gray" />
          <Text className="text-sm text-gray-500">3 subjects</Text>
        </View>
      </View>
      <AntDesign name="right" size={20} color="gray" />
    </View>
  );
};

export default function semesters() {
  const sems = [1, 2, 3, 4, 5, 6];
  return (
    <SafeAreaView className="flex-1  relative items-center justify-center bg-l-primary">
      <StatusBar barStyle="default" hidden={false} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Navbar />
        <View className="flex-1 items-center top-16 ">
          <View className=" mt-5  items-center w-screen overflow-hidden   h-fit">
            <View className=" px- h-16 w-[85%] justify-center items-start  gap-3">
              <View className="flex-row items-center gap-3">
                <Feather name="calendar" size={24} color="blue" />
                <Text className="text-3xl   font-bold">Semesters</Text>
              </View>
              <Text className=" text-gray-700">
                Organize your academic journey.
              </Text>
            </View>
          </View>

          <View className="w-[85%] mt-5">
             <FlatList
              data={sems}
              renderItem={() => <Semester />}
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
