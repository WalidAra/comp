import React, { useEffect, useState } from "react";
import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import COLORS from "@/constants/public/COLORS";
import { Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "native-base";
import clientLocalStorage from "@/lib/clientLocalStorage";
import fetchers from "@/lib/fetchers";
import { StudentInfo, TokenData } from "@/types-env";
import s from "@/styles/global";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const HomeLayout = () => {
  const router = useRouter();

  const [userDataBac, setUserDataBac] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const res = await clientLocalStorage.getItem({
        key: "userData",
      });

      if (res) {
        const tokenObj: TokenData = JSON.parse(res);
        fetchers
          .getInfoBacUser({ token: tokenObj.token, uuid: tokenObj.uuid })
          .then((data: StudentInfo) => {
            setUserDataBac(data);
            console.log(data);
          })
          .catch((error) => {
            console.error("Error retrieving token:", error);
          });
      }
    };

    getData();
  }, []);
  return (
    <Tabs
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          width: "90%",
          left: "5%",
          borderRadius: 20,
          backgroundColor: COLORS.white,
          height: 56,
          borderColor:"white"
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={size} color={color} />
          ),
          headerTitle: "",
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerShown: false,
          headerShadowVisible: false,
        }}
      />

      <Tabs.Screen
        name="progress"
        options={{
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerShadowVisible: false,
          headerTitle: "Student progress",
          headerTitleStyle: { color: COLORS.h1, fontWeight: "700" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              style={{ paddingHorizontal: 20 }}
            >
              <Ionicons name="arrow-back-sharp" size={25} color="black" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="User"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="comment-bookmark-outline"
              size={size}
              color={color}
            />
          ),
          headerShown: true,
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerShadowVisible: false,
          headerTitle: "Groups & Sections",
          headerTitleStyle: { color: COLORS.h1, fontWeight: "700" },

          headerTitleAlign: "center",
        }}
      />

      <Tabs.Screen
        name="test"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="globe-model"
              size={size}
              color={color}
            />
          ),
          headerShown: true,
          headerTitleAlign: "center",
          headerTitle: "Academic Leave Retrieval",
          headerStyle: {
            backgroundColor: COLORS.white,
          },
          headerShadowVisible: false,
          headerTitleStyle: { color: COLORS.h1, fontWeight: "700" },
        }}
      />
    </Tabs>
  );
};

export default HomeLayout;
