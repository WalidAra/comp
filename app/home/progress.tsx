import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import s from "@/styles/global";
import { FlatList, ScrollView } from "native-base";
import COLORS from "@/constants/public/COLORS";
import BacNotes from "@/components/progress/BacNotes";

const labels: string[] = [
  "bac",
  "License 1",
  "Licene 2",
  "Licene 3",
  "Master 1",
  "Master2",
];

const ProgressStudent = () => {
  const unconditionalStyles = StyleSheet.create({
    tabsContainer: {
      width: "100%",
    },
  });
  const conditionalStyles = (activeLabel?: string, item?: string) =>
    StyleSheet.create({
      tab: {
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 99,
        borderWidth: 1,
        borderColor: activeLabel === item ? "black" : COLORS.smTxt,
        backgroundColor: activeLabel === item ? "black" : "transparent",
      },
      tabText: {
        fontWeight: "600",
        color: activeLabel === item ? COLORS.white : COLORS.smTxt,
      },
    });

  const [activeLabel, setActiveLabel] = useState<string>("bac");
  return (
    <ScrollView style={s.unconditionalStyles.body}>
      <View style={{ flex: 1, padding: 20, paddingVertical: 50 }}>
        <View style={unconditionalStyles.tabsContainer}>
          <FlatList
            horizontal
            contentContainerStyle={{ columnGap: 15 }}
            data={labels}
            renderItem={(job) => (
              <TouchableOpacity
                onPress={() => {
                  setActiveLabel(job.item);
                  // router.push(`/search/${job.item}`);
                }}
                style={conditionalStyles(activeLabel, job.item).tab}
              >
                <Text style={conditionalStyles(activeLabel, job.item).tabText}>
                  {job.item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {activeLabel === "bac" ? (
          <BacNotes />
        ) : (
          <Text
            style={{
              textAlign: "center",
              fontWeight: "600",
              paddingVertical: 50,
            }}
          >
            There is no information currently{" "}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default ProgressStudent;
