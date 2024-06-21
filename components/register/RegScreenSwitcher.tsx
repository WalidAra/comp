import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "@/constants/public/COLORS";
import { useRouter } from "expo-router";

type Props = {
  path: string;
  title: string;
  linkText: string;
};

const RegScreenSwitcher = ({ path, title, linkText }: Props) => {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.linkText}>{linkText}</Text>
      <TouchableOpacity onPress={()=> {
        router.push(path === "login" ? "/login/Login" : "/signUp/SignUp");
      }} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    color: COLORS.smTxt,
  },
  button: {
    marginLeft: 5,
    padding: 0,
  },
  buttonText: {
    color: COLORS.whiteBoardL,
  },
});

export default RegScreenSwitcher;
