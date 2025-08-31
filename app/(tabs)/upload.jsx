import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from "expo-document-picker";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UploadPage() {
  const [files, setFiles] = useState([]);

  // Load saved files on mount
  useEffect(() => {
    const loadFiles = async () => {
      const stored = await AsyncStorage.getItem("files");
      if (stored) {
        setFiles(JSON.parse(stored));
      }
    };
    loadFiles();
  }, []);

  const pickFile = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
        copyToCacheDirectory: true,
      });

      if (result.type === "success") {
        const newFile = {
          name: result.name,
          uri: result.uri,
          mimeType: result.mimeType || "application/octet-stream",
        };

        const updatedFiles = [...files, newFile];
        setFiles(updatedFiles);
        await AsyncStorage.setItem("files", JSON.stringify(updatedFiles));

        Alert.alert("Saved", "File saved locally!");
      }
    } catch (err) {
      console.log("File pick error:", err);
    }
  };

  const clearFiles = async () => {
    await AsyncStorage.removeItem("files");
    setFiles([]);
  };

  return (
    <SafeAreaView className="flex-1  relative w-screen h-screen items-center justify-center bg-l-primary">
      <TouchableOpacity
        onPress={pickFile}
        className="bg-blue-500 p-4 rounded-xl flex-row items-center justify-center gap-2"
      >
        <Feather name="file-plus" size={20} color="#fff" />
        <Text className="text-white text-base font-semibold">Pick a File</Text>
      </TouchableOpacity>

      <FlatList
        data={files}
        keyExtractor={(_, index) => index.toString()}
        className="mt-6"
        renderItem={({ item }) => (
          <View className="flex-row items-center p-3 border-b border-blue-200">
            <Feather name="file" size={20} color="#555" />
            <Text className="ml-2 text-gray-700">{item.name}</Text>
          </View>
        )}
      />

      {files.length > 0 && (
        <TouchableOpacity
          onPress={clearFiles}
          className="mt-6 bg-red-500 py-3 rounded-xl items-center"
        >
          <Text className="text-white font-semibold">Clear All</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}
