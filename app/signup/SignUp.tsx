import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import COLORS from "@/constants/public/COLORS";
import { KeyboardAvoidingView } from "native-base";
import RegInput from "@/components/register/RegInput";
import { Feather, Fontisto } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { FetchResult } from "@/types-env";
import fetchers from "@/lib/fetchers";
import clientLocalStorage from "@/lib/clientLocalStorage";

const SignUp = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [email, setEMAIL] = useState<string>("Walid.Ara@gmail.com");
  const [password, setPassword] = useState<string>("123456");
  const [name, setName] = useState<string>("Exotic");

  const HandleSignUp = async () => {
    const response: FetchResult = await fetchers.signUp({
      email,
      password,
      name,
    });

    if (response.status) {
      const privateData = response.data.token;
      await clientLocalStorage.setItem({ key: "user", value: privateData });
      router.push("/home/Home");
    }
  };

  const unconditionalStyles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: "center",
      padding: 30,
      gap: 20,
      backgroundColor: COLORS.white,
    },
    header: {
      backgroundColor: "#fff", // Set background color (optional)
      padding: 20, // Add some padding (optional)
      justifyContent: "center", // Center content vertically
      alignItems: "center", // Center content horizontally
    },
    headerText: {
      fontSize: 24, // Set font size
      fontWeight: "bold", // Set font weight
      color: "#000", // Set text color
      textAlign: "center", // Center text horizontally
      textTransform: "uppercase", // Convert text to uppercase (optional)
    },

    regBtn: {
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderRadius: 15,
      backgroundColor: COLORS.primary,
    },
    regBtnText: {
      color: COLORS.whiteBoardL,
      fontSize: 18,
      fontWeight: "600",
      textAlign: "center",
    },
  });
  const conditionalStyles = () => StyleSheet.create({});
  return (
    <KeyboardAvoidingView style={unconditionalStyles.body}>
      <View style={unconditionalStyles.header}>
        <Text style={unconditionalStyles.headerText}>Create Account</Text>

        <Text>Create account to continue</Text>
      </View>

      <View style={{ gap: 20 }}>
        <RegInput
          viewPassword={false}
          placeHolder="Name"
          Icon={<AntDesign name="user" size={24} color="black" />}
        />
        <RegInput
          viewPassword={false}
          placeHolder="Email"
          Icon={<Fontisto name="email" size={24} color={COLORS.smTxt} />}
        />
        <RegInput
          viewPassword
          placeHolder="Password"
          Icon={<Feather name="lock" size={24} color={COLORS.smTxt} />}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "50%",
            }}
          >
            <CheckBox
              title=""
              checked={isChecked} // Boolean state indicating checkbox state
              onPress={() => {
                setIsChecked((prev) => !prev);
              }} // Function to toggle state
              style={{ backgroundColor: "red" }}
            />
            <Text>Remember me</Text>
          </View>

          <TouchableOpacity onPress={() => {}}>
            <Text style={{ color: COLORS.primary }}>Forget Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={HandleSignUp}
        style={unconditionalStyles.regBtn}
      >
        <Text style={unconditionalStyles.regBtnText}>Sign up</Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontWeight: "400" }}>Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            router.push("/login/Login");
          }}
        >
          <Text style={{ color: COLORS.primary, fontWeight: "400" }}>
            login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
