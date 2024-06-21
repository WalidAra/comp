import { View, Text, Image, TouchableOpacity } from "react-native";
import React from 'react'
import COLORS from '@/constants/public/COLORS';

const ChangePhoto = () => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View style={{ gap: 10, flex: 1, maxWidth: "60%" }}>
        <Text style={{ fontSize: 15, fontWeight: "600", color: COLORS.h1 }}>
          Profile Photo
        </Text>

        <Text style={{ color: COLORS.smTxt }}>Recommended 300 x 300</Text>

        <View style={{ gap: 15, flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 9,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Text>Change</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 15,
              paddingVertical: 9,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "#ccc",
            }}
          >
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Image
          resizeMode="contain"
          style={{ width: 100, height: 100, borderRadius: 9999 }}
          source={{
            uri: "https://i.pinimg.com/736x/a0/a2/5f/a0a25f748f48c3e3463c4f499520ffdb.jpg",
          }}
        />
      </View>
    </View>
  );
}

export default ChangePhoto