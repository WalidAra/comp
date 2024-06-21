import { View, Text } from "react-native";
import React from "react";
import COLORS from "@/constants/public/COLORS";

const DateComp = ({ date }: { date: string }) => {
  const parsedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long", // Full month name
    day: "numeric",
  };

  const formattedDate = parsedDate.toLocaleDateString(undefined, options);

  return <Text style={{ color: COLORS.white , fontWeight:"600"}}>{formattedDate}</Text>;
};

export default DateComp;
