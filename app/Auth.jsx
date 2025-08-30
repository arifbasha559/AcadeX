import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Auth() {
  const [toggleAuth, setToggleAuth] = useState(false);
  const [togglePass, setTogglePass] = useState(true);

  // State for inputs
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Helper to update input fields
  const handleInputChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <View className="justify-center items-center w-full h-full ">
      <View className="w-[85%] min-h-32 bg-l-secondary shadow-lg shadow-accent roundlg items-center justify-center ">
        <View className="items-center justify-center my-5">
          <Text className="bg-accent size- text-white text-4xl font-bold py-1.5 px-3 rounded-lg">
            A
          </Text>
          <Text className="text-2xl font-bold">Welcome to AcadeX</Text>
          <Text className="text-xl font-light">
            Your Academic File Organizer
          </Text>
          {toggleAuth ? (
            <View className="gap-4 justify-center items-center">
              <View>
                <Text className="text-lg font-semibold text-left w-full ">
                  Name
                </Text>
                <View className="flex-row gap-4 w-11/12 items-center justify-between px-2 py-1 bg-l-border/40 ">
                  <Feather name="mail" size={20} color={"black"} />
                  <TextInput
                    className="flex-1"
                    accessibilityLabel="Name input field"
                    placeholder="Enter your name"
                    value={inputs.name}
                    onChangeText={(text) => handleInputChange("name", text)}
                  />
                </View>
              </View>
              <View>
                <Text className="text-lg font-semibold text-left w-full ">
                  Email
                </Text>
                <View className="flex-row gap-4 w-11/12 items-center justify-between px-2 py-1 bg-l-border/40 ">
                  <Feather name="mail" size={20} color={"black"} />
                  <TextInput
                    className="flex-1"
                    accessibilityLabel="Email input field"
                    placeholder="Enter your email"
                    value={inputs.email}
                    onChangeText={(text) => handleInputChange("email", text)}
                  />
                </View>
              </View>
              <View>
                <Text className="text-lg font-semibold text-left w-full ">
                  Password
                </Text>
                <View className="flex-row gap-4 w-11/12 items-center justify-between px-2 py-1 bg-l-border/40 ">
                  <Feather name="mail" size={20} color={"black"} />
                  <TextInput
                    className="flex-1"
                    secureTextEntry={togglePass}
                    accessibilityLabel="Password input field"
                    placeholder="Enter your password"
                    value={inputs.password}
                    onChangeText={(text) => handleInputChange("password", text)}
                  />
                  <TouchableOpacity onPress={() => setTogglePass(!togglePass)}>
                    <Feather
                      name={togglePass ? "eye-off" : "eye"}
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                <Text className="text-lg font-semibold text-left w-full ">
                  Confirm Password
                </Text>
                <View className="flex-row gap-4 w-11/12 items-center justify-between px-2 py-1 bg-l-border/40 ">
                  <Feather name="mail" size={20} color={"black"} />
                  <TextInput
                    className="flex-1"
                    secureTextEntry={togglePass}
                    accessibilityLabel="Confirm password input field"
                    placeholder="Confirm your password"
                    value={inputs.confirmPassword}
                    onChangeText={(text) =>
                      handleInputChange("confirmPassword", text)
                    }
                  />
                  <TouchableOpacity onPress={() => setTogglePass(!togglePass)}>
                    <Feather
                      name={togglePass ? "eye-off" : "eye"}
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                {/* Button */}
                <TouchableOpacity
                  className="w-full"
                  onPress={() => {
                    router.push("/");
                  }}
                >
                  <Text className="w-[78vw] rounded-lg py-4 text-center text-xl font-semibold text-white bg-accent">
                    Sign Up
                  </Text>
                </TouchableOpacity>

                {/* Row below the button */}
                <View className="flex-row justify-center items-center mt-3">
                  <Text>Already have an account? </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setToggleAuth(!toggleAuth);
                    }}
                  >
                    <Text className="text-accent font-semibold">Sign In</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row max-w-[78vw] gap-4 justify-between">
                <TouchableOpacity
                  className="w-[48%]"
                  onPress={() => {
                    console.log(inputs);
                  }}
                >
                  <Text className=" rounded-lg py-4 text-center text-xl font-semibold text-white bg-accent">
                    Google
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="w-[48%]"
                  onPress={() => {
                    console.log(inputs);
                  }}
                >
                  <Text className=" rounded-lg py-4 text-center text-xl font-semibold text-white bg-red-500">
                    Apple
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            // Login Page

            <View className="gap-4 justify-center items-center">
              <View>
                <Text className="text-lg font-semibold text-left w-full ">
                  Email
                </Text>
                <View className="flex-row gap-4 w-11/12 items-center justify-between px-2 py-1 bg-l-border/40 ">
                  <Feather name="mail" size={20} color={"black"} />
                  <TextInput
                    className="flex-1"
                    accessibilityLabel="Email input field"
                    placeholder="Enter your email"
                    value={inputs.email}
                    onChangeText={(text) => handleInputChange("email", text)}
                    keyboardType="email-address" // 👈 opens email-optimized keyboard
                    autoCapitalize="none" // 👈 don't auto-capitalize first letter
                    autoCorrect={false}
                  />
                </View>
              </View>
              <View>
                <Text className="text-lg font-semibold text-left w-full ">
                  Password
                </Text>
                <View className="flex-row gap-4 w-11/12 items-center justify-between px-2 py-1 bg-l-border/40 ">
                  <Feather name="mail" size={20} color={"black"} />
                  <TextInput
                    className="flex-1"
                    secureTextEntry={togglePass}
                    accessibilityLabel="Password input field"
                    placeholder="Enter your password"
                    value={inputs.password}
                    onChangeText={(text) => handleInputChange("password", text)}
                  />
                  <TouchableOpacity onPress={() => setTogglePass(!togglePass)}>
                    <Feather
                      name={togglePass ? "eye-off" : "eye"}
                      size={20}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View>
                {/* Button */}
                <TouchableOpacity
                  className="w-full"
                  onPress={() => {
                    console.log(inputs);
                  }}
                >
                  <Text className="w-[78vw] rounded-lg py-4 text-center text-xl font-semibold text-white bg-accent">
                    Sign In
                  </Text>
                </TouchableOpacity>

                {/* Row below the button */}
                <View className="flex-row justify-center items-center mt-3">
                  <Text>Don&apos;t have an Account? </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setToggleAuth(!toggleAuth);
                    }}
                  >
                    <Text className="text-accent font-semibold">Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="flex-row max-w-[78vw] gap-4 justify-between">
                <TouchableOpacity
                  className="w-[48%]"
                  onPress={() => {
                    console.log(inputs);
                  }}
                >
                  <Text className=" rounded-lg py-4 text-center text-xl font-semibold text-white bg-accent">
                    Google
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="w-[48%]"
                  onPress={() => {
                    console.log(inputs);
                  }}
                >
                  <Text className=" rounded-lg py-4 text-center text-xl font-semibold text-white bg-red-500">
                    Apple
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
