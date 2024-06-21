import COLORS from "@/constants/public/COLORS";
import { StyleSheet } from "react-native";

const s = {
  unconditionalStyles: StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: COLORS.white,
    },
    h1: {
      color: COLORS.container,
      fontSize: 16,
      fontWeight: "bold",
      textTransform: "lowercase",
    },

    centerDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
  }),
  conditionalStyles: () => StyleSheet.create({}),
};

export default s;
