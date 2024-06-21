import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "native-base";
import s from "@/styles/global";
import COLORS from "@/constants/public/COLORS";
import fetchers from "@/lib/fetchers";
import clientLocalStorage from "@/lib/clientLocalStorage";

type AffectationData = {
  dateAffectation: string;
  groupePedagogiqueId: number;
  id: number;
  nomGroupePedagogique: string;
  nomSection: string;
  periodeCode: string;
  periodeId: number;
  periodeLibelleLongLt: string;
};

const User = () => {
  const [semester, setSemester] = useState<AffectationData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await clientLocalStorage.getItem({
        key: "userData",
      });

      if (res) {
        const tokenObj = JSON.parse(res);
        fetchers
          .getUserGroups({ token: tokenObj.token, idDia: tokenObj.userId })
          .then((data) => {
            setSemester(data); // Set the data to the semester state
          })
          .catch((error) => {
            console.error("Error retrieving token:", error);
          });
      }
    };

    getData();
  }, []);

  return (
    <SafeAreaView style={s.unconditionalStyles.body}>
      <ScrollView style={{ paddingVertical: 20 }}>
        <View style={{ width: "100%", padding: 20 }}>
          {semester.map((data, index) => (
            <View key={index} style={styles.container}>
              <View style={styles.row}>
                <Text style={styles.title}>Period</Text>
                <Text style={styles.text}>
                  Semester {data.periodeLibelleLongLt}
                </Text>
              </View>
              <Divider />
              <View style={styles.row}>
                <Text style={styles.title}>Section</Text>
                <Text style={styles.text}>{data.nomSection}</Text>
              </View>
              <Divider />
              <View style={styles.row}>
                <Text style={styles.title}>Group</Text>
                <Text style={styles.text}>{data.nomGroupePedagogique}</Text>
              </View>
              <Divider />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 20,
    borderColor: COLORS.smTxt,
    borderRadius: 12,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: {
    fontWeight: "600",
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
});

export default User;
