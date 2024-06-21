import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import COLORS from "@/constants/public/COLORS";
import { Divider, ScrollView } from "native-base";
import Head from "@/components/edit profile/Head";
import ChangePhoto from "@/components/edit profile/ChangePhoto";

const EditProfile = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const unconditionalStyles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: COLORS.white,
      paddingHorizontal: 30,
      gap: 30,
      paddingVertical: 20,
    },

    input: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderWidth: 2,
      borderColor: "#ccc",
      borderRadius: 5,
    },
    focusedInput: {
      borderColor: COLORS.primary,
    },
  });
  const conditionalStyles = () => StyleSheet.create({});
  return (
    <ScrollView style={unconditionalStyles.body}>
      <Head />

      <View style={{ width: "100%", gap: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "600", color: COLORS.h1 }}>
          Basic information
        </Text>
        <ChangePhoto />

        <View style={{ gap: 15 }}>
          <Text style={{ fontWeight: "600", color: COLORS.h1 }}>Name</Text>
          <TextInput
            placeholder="Exotic"
            style={[
              unconditionalStyles.input,
              isFocused && unconditionalStyles.focusedInput,
            ]}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </View>
        <View style={{ gap: 15 }}>
          <Text style={{ fontWeight: "600", color: COLORS.h1 }}>Email</Text>
          <TextInput
            style={[
              unconditionalStyles.input,
              isFocused && unconditionalStyles.focusedInput,
            ]}
            placeholder="arawalid90@gmail.com"
          />
        </View>
        <View style={{ gap: 15 }}>
          <Text style={{ fontWeight: "600", color: COLORS.h1 }}>Password</Text>
          <TextInput
            style={[
              unconditionalStyles.input,
              isFocused && unconditionalStyles.focusedInput,
            ]}
            placeholder="*******"
          />
        </View>
        <View style={{ gap: 15 }}>
          <Text style={{ fontWeight: "600", color: COLORS.h1 }}>
            Confirm password
          </Text>
          <TextInput
            style={[
              unconditionalStyles.input,
              isFocused && unconditionalStyles.focusedInput,
            ]}
            placeholder="*******"
          />
        </View>

        <Divider />
      </View>

      <TouchableOpacity
        style={{
          width: "100%",
          paddingVertical: 16,
          paddingHorizontal: 24,
          borderRadius: 15,
          backgroundColor: COLORS.primary,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ color: COLORS.white, fontWeight: "600", fontSize: 16 }}>
          Save
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default EditProfile;
