import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Checkbox, KeyboardAvoidingView } from "native-base";
import COLORS from "@/constants/public/COLORS";
import RegInput from "@/components/register/RegInput";
import { Feather, Fontisto } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { CheckBox } from "react-native-elements";
import fetchers from "@/lib/fetchers";
import {  TokenData } from "@/types-env";
import clientLocalStorage from "@/lib/clientLocalStorage";

const Login = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [password, setPassword] = useState<string>(""); //rTgxtu3K
  const [userName, setUserName] = useState<string>(""); //202132004999
  const [isIn, setIsIn] = useState<boolean>(false);

  const HandleLogin = async () => {
    const response: TokenData = await fetchers.login({
      username: userName,
      password,
    });
    // console.log(response);
    if (response) {
      await clientLocalStorage.setItem({
        key: "userData",
        value: JSON.stringify(response),
      });
      router.push("/home/Home");
    }
  };

  // useEffect(() => {
  //   const check = async () => {
  //     const tokenDecrypt = await clientLocalStorage.getItem({
  //       key: "userData",
  //     });
  //     if (tokenDecrypt) {
  //       const tokenObj: TokenData = JSON.parse(tokenDecrypt);
  //       if (tokenObj.expirationDate === ) {
  //       }
  //     }
  //   };

  //   check();
  // }, []);

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
        <Text style={unconditionalStyles.headerText}>Welcome Back</Text>

        <Text>Sign in to continue</Text>
      </View>

      <View style={{ gap: 20 }}>
        <RegInput
          str={userName}
          setStr={setUserName}
          placeHolder="User Name"
          Icon={<Fontisto name="email" size={24} color={COLORS.smTxt} />}
        />
        <RegInput
          str={password}
          setStr={setPassword}
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
        </View>
      </View>
      <TouchableOpacity
        onPress={HandleLogin}
        style={unconditionalStyles.regBtn}
      >
        <Text style={unconditionalStyles.regBtnText}>Login</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Login;
