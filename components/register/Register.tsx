import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import COLORS from "@/constants/public/COLORS";
import { useRouter } from "expo-router";

const Register = () => {
  const myImage = require("@/assets/images/porgress.png");
  const router = useRouter();
  const unconditionalStyles = StyleSheet.create({
    regContainer: {
      flex: 1,
      justifyContent: "space-between",
      padding: 30,
      backgroundColor: COLORS.white,
    },
  });
  const conditionalStyles = (regBtnLabel?: string) =>
    StyleSheet.create({
      regBtn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 9999,
        backgroundColor:
          regBtnLabel === "login" ? COLORS.whiteBoard : COLORS.primary,
        borderWidth: 1,
        borderColor: COLORS.border,
      },
      regBtnLabel: {
        color: regBtnLabel === "login" ? COLORS.primary : COLORS.white,
        fontSize: 18,
        fontWeight: "500",
      },
    });

  return (
    <View style={unconditionalStyles.regContainer}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 15,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <Text
            style={{
              fontFamily: "DancingScriptBold",
              color: "white",
              fontSize: 25,
            }}
          >
            P
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "DancingScriptBold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Welcome To Progress
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.push("/login/Login");
          }}
          style={conditionalStyles("login").regBtn}
        >
          <Text style={conditionalStyles("login").regBtnLabel}>
            {" "}
            Get Started{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
