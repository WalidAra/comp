import { View, Text } from "react-native";
import React, { useEffect } from "react";
import s from "@/styles/global";
import clientLocalStorage from "@/lib/clientLocalStorage";
import { TokenData } from "@/types-env";
import fetchers from "@/lib/fetchers";

const Test = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await clientLocalStorage.getItem({
        key: "userData",
      });

      if (res) {
        const tokenObj: TokenData = JSON.parse(res);
        fetchers
          .getVacationUserInfo({
            token: tokenObj.token,
            uuid: tokenObj.uuid,
          })
          .then((data) => {
            console.log("====================================");
            console.log(data);
            console.log("====================================");
          })
          .catch((error) => {
            console.error("Error retrieving token:", error);
          });
      }
    };

    getData();
  }, []);
  return (
    <View style={s.unconditionalStyles.body}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 40,
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "600" }}>
            there is no information currently
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Test;
