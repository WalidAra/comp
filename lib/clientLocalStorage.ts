import AsyncStorage from "@react-native-async-storage/async-storage";

const clientLocalStorage = {
  getItem: async ({ key }: { key: string }) => {
    try {
      const data = await AsyncStorage.getItem(key);
      return data;
    } catch (error) {
      console.error("Failed to get item from AsyncStorage:", error);
      return null;
    }
  },
  setItem: async ({ key, value }: { key: string; value: string }) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("Item stored successfully in AsyncStorage.");
    } catch (error) {
      console.error("Failed to store item in AsyncStorage:", error);
    }
  },
  removeItem: async ({ key }: { key: string }) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Item removed successfully from AsyncStorage.");
    } catch (error) {
      console.error("Failed to remove item from AsyncStorage:", error);
    }
  },
};

export default clientLocalStorage;
