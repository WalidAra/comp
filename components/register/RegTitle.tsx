import { View, Text } from "react-native";
import React from "react";
import COLORS from "@/constants/public/COLORS";

type Props = {
  title: string;
};

const RegTitle = ({ title }: Props) => {
  return (
    <Text
      style={{
        width: "60%",
        fontSize: 40,
        color: COLORS.whiteBoardL,
        fontWeight: "bold",
      }}
    >
      {title}
    </Text>
  );
};

export default RegTitle;
