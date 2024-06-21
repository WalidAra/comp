import { View, Text } from 'react-native'
import React from 'react'
import COLORS from '@/constants/public/COLORS';
import { Divider } from 'native-base';

const Head = () => {
  return (
    <View style={{ width: "100%", gap: 15 }}>
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: COLORS.h1,
          }}
        >
          Edit profile
        </Text>
      </View>

      <Text style={{ color: COLORS.smTxt }}>
        Provide details about yourself and any other pertinent information
      </Text>

      <Divider />
    </View>
  );
}

export default Head