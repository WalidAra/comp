import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import clientLocalStorage from "@/lib/clientLocalStorage";
import fetchers from "@/lib/fetchers";
import { StudentInfo, TokenData } from "@/types-env";
import COLORS from "@/constants/public/COLORS";

type Module = {
  note: number;
  refCodeMatiereLibelleFr: string;
};

const BacNotes = () => {
  const [bacNotes, setBacNotes] = useState<Module[]>([]);
  const [userDataBac, setUserDataBac] = useState<any>({});

  useEffect(() => {
    const getData = async () => {
      const res = await clientLocalStorage.getItem({
        key: "userData",
      });

      if (res) {
        const tokenObj: TokenData = JSON.parse(res);
        fetchers
          .getInfoBacNotes({ token: tokenObj.token, uuid: tokenObj.uuid })
          .then((data) => {
            setBacNotes(data);
          })
          .catch((err) => {
            console.error(err);
          });

        fetchers
          .getInfoBacUser({ token: tokenObj.token, uuid: tokenObj.uuid })
          .then((data: StudentInfo) => {
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
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 15, // Added padding to the row
        }}
      >
        <Text style={{ fontWeight: "600" }}>Bac {userDataBac.anneeBac} : </Text>
        <Text
          style={{
            fontWeight: "600",
            color:
              userDataBac.anneeBac >= 10 ? "green" : "red",
          }}
        >
          {" "}
          {userDataBac.moyenneBac}{" "}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingVertical: 15, // Added padding to the row
        }}
      >
        <Text style={{ fontWeight: "600" }}>Module</Text>
        <Text style={{ fontWeight: "600" }}>Note</Text>
      </View>

      <View style={{ width: "100%" }}>
        {bacNotes.map((m, index) => (
          <View
            key={"module-bac-" + index} // Fixed key string
            style={{
              width: "100%",
              height: 56,
              marginTop: 5,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                borderRadius: 3,
                height: "100%",
                width: 10,
                backgroundColor:
                  m.note  >= 10 ? "green" :"red",
              }}
            ></View>

            <View
              style={{
                flex: 1,
                height: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10, // Added padding to the row
              }}
            >
              <Text style={{ color: COLORS.h1, fontWeight: "600" }}>
                {m.refCodeMatiereLibelleFr}
              </Text>
              <Text
                style={{
                  color: COLORS.primary,

                  textAlign: "right",
                }}
              >
                {m.note + 1}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default BacNotes;
