import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import s from "@/styles/global";
import COLORS from "@/constants/public/COLORS";

const Nav = () => {
  const unconditionalStyles = StyleSheet.create({});
  const conditionalStyles = () => StyleSheet.create({});
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 25,
      }}
    >
      <View style={{flexDirection:"row" , alignItems:"center" , gap:10}} >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity>
            <View
              style={{
                padding: 2,
                borderWidth: 3,
                borderColor: "#ccc",
                borderRadius: 99,
              }}
            >
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 99,
                }}
                source={{
                  uri: "https://i.pinimg.com/236x/fd/27/bd/fd27bda8edcd40ef1f6f24cc469762ca.jpg",
                }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{}}>
          <Text style={s.unconditionalStyles.h1} >ExoticAra </Text>
          <Text style={{fontWeight:"500" , fontSize:12 , color:COLORS.smTxt}} >arawalid90@gmail.com </Text>
        </View>

      </View>
    </View>
  );
};

export default Nav;
