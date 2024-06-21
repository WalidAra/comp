import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import s from "@/styles/global";
import Nav from "@/components/home/Nav";
import { NavigationContainer } from "@react-navigation/native";
import clientLocalStorage from "@/lib/clientLocalStorage";
import fetchers from "@/lib/fetchers";
import { StudentInfo, TokenData } from "@/types-env";
import COLORS from "@/constants/public/COLORS";
import DateComp from "@/components/home/DateComp";
import { Avatar, ScrollView } from "native-base";

const Home = () => {
  const unconditionalStyles = StyleSheet.create({
    name: {
      color: COLORS.white,
      fontSize: 20,
    },
    normal: {
      color: COLORS.white,
      fontSize: 16,
    },
    bold: {
      fontWeight: "bold",
    },
  });
  const conditionalStyles = () => StyleSheet.create({});

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
            console.log("====================================");
            console.log(data);
            console.log("====================================");
            setUserDataBac(data);
          })
          .catch((error) => {
            console.error("Error retrieving token:", error);
          });
      }
    };

    getData();
  }, []);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.container }}>
      <View style={{ flex: 1, padding: 20, paddingBottom: 60 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 15,

            paddingTop: 60,
            paddingBottom: 20,
          }}
        >
          <Avatar
            size={"xl"}
            source={{
              uri: "https://i.pinimg.com/736x/4c/54/10/4c54100cf4c5bd07b2de2cb63e308ebd.jpg",
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: "bold",
                color: COLORS.h1,
                textTransform: "capitalize",
                fontSize: 25,
              }}
            >
              Hi ,{userDataBac.prenomFr} 👋
            </Text>

            <Text
              style={{
                color: COLORS.h1,
                textTransform: "capitalize",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Welcome to progress
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            gap: 10,
            padding: 30,
            backgroundColor: COLORS.primary,
            borderRadius: 20,
          }}
        >
          <View style={{}}>
            <Text
              style={{ color: COLORS.white, fontSize: 20, fontWeight: "bold" }}
            >
              {userDataBac.prenomFr} {userDataBac.nomFr}
            </Text>
            <Text
              style={{ color: COLORS.white, fontSize: 12, fontWeight: "500" }}
            >
              @{userDataBac.matricule}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", gap: 20, alignItems: "center" }}
          ></View>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <DateComp date={userDataBac.dateNaissance} />
          </View>
          <View style={{ flexDirection: "row", gap: 20, alignItems: "center" }}>
            <Text
              style={{ color: COLORS.white, fontSize: 16, fontWeight: "500" }}
            >
              {userDataBac.libelleSerieBac}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            backgroundColor: COLORS.white,
            padding: 10,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Getting Started</Text>
            <Text style={styles.normalText}>
              Welcome to Progress! Here are a few tips to help you get started
            </Text>
            <Text style={styles.normalText}>
              Navigation Menu - Use the navigation menu on the Bottom to access
              different sections of the app
            </Text>
            <Text style={styles.normalText}>
              If you have any questions or need assistance, feel free to reach
              out to our support team.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  normalText: {
    fontSize: 16,
    marginBottom: 5,
    color: COLORS.smTxt,
    fontWeight: "500",
  },
});
