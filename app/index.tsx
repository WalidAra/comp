import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import s from "@/styles/global";
import Register from "@/components/register/Register";
import { Redirect } from "expo-router";
import clientLocalStorage from "@/lib/clientLocalStorage";
import fetchers from "@/lib/fetchers";
import { Provider } from "react-redux";
import currentStore from "@/redux/store/currentStore";

const App = () => {
  const [isToken, setIsToken] = useState<boolean>(false);
  const unconditionalStyles = StyleSheet.create({});
  const conditionalStyles = () => StyleSheet.create({});

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await clientLocalStorage.getItem({
          key: "user",
        });

        if (token) {
          const res = await fetchers.getUserProfile({ token });
          setIsToken(true);
        }
      } catch (error) {
        console.error("Error retrieving token:", error);
      }
    };

    getToken();
  }, []);

  if (!isToken) {
    return (
      <View style={s.unconditionalStyles.body}>
        <Register />
      </View>
    );
  } else {
    return <Redirect href={"/home/Home"} />;
  }
};

export default App;
