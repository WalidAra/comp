import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import COLORS from "@/constants/public/COLORS";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
type Props = {
  placeHolder: string;
  Icon: any;
  viewPassword?: boolean;
  str: string;
  setStr: (value: string) => void;
};

const RegInput = ({ Icon, placeHolder, viewPassword, setStr, str }: Props) => {
  const [isViewed, setIsViewed] = useState(false);
  const unconditionalStyles = StyleSheet.create({
    container: {
      width: "100%",
      position: "relative",
      paddingVertical: 14,
      paddingHorizontal: 18,
      paddingLeft: 55,
      backgroundColor: COLORS.whiteBoard,
      borderRadius: 15,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: COLORS.border,
    },

    Input: {
      flex: 1,
    },
    IconContainer: {
      position: "absolute",
      left: 18,
      color: "white",
    },

    eye: {
      position: "absolute",
      right: 18,
      color: "white",
    },
  });
  const conditionalStyles = () => StyleSheet.create({});
  return (
    <View style={unconditionalStyles.container}>
      <View style={unconditionalStyles.IconContainer}>{Icon}</View>
      {viewPassword && (
        <Pressable
          onPress={() => {
            setIsViewed((prev) => !prev);
          }}
          style={unconditionalStyles.eye}
        >
          {isViewed ? (
            <AntDesign name="eye" size={24} color="black" />
          ) : (
            <Entypo name="eye-with-line" size={24} color="black" />
          )}
        </Pressable>
      )}
      <TextInput
        onChangeText={(value) => {
          setStr(value);
        }}
        placeholderTextColor={COLORS.smTxt}
        placeholder={placeHolder}
        style={unconditionalStyles.Input}
      />
    </View>
  );
};

export default RegInput;
