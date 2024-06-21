import axios from "axios";
const BASE_URL = "";

const fetchers = {
  login: async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const res = await axios.post(BASE_URL.trim() + "authentication/v1/", {
        username,
        password,
      });
      const data = await res.data;
      return data;
    } catch (error: any) {
      console.error("Error occurred during login:", error.message);
      throw error;
    }
  },

  getInfoBacNotes: async ({ token, uuid }: { token: string; uuid: string }) => {
    try {
      const res = await axios.get(
        ``,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res.data;
      return data;
    } catch (error: any) {
      console.error("Error occurred while fetching user by ID:", error.message);
      throw error;
    }
  },

  getUserGroups: async ({ token, idDia }: { token: string; idDia: number }) => {
    try {
      const res = await axios.get(
        ``,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res.data;
      return data;
    } catch (error: any) {
      console.error("Error occurred while fetching user by ID:", error.message);
      throw error;
    }
  },

  getInfoBacUser: async ({ token, uuid }: { token: string; uuid: string }) => {
    try {
      const res = await axios.get(
        ``,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res.data;
      return data;
    } catch (error: any) {
      console.error("Error occurred while fetching user by ID:", error.message);
      throw error;
    }
  },

  getVacationUserInfo: async ({
    token,
    uuid,
  }: {
    token: string;
    uuid: string;
  }) => {
    try {
      const res = await axios.get(
        ``,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const data = await res.data;
      return data;
    } catch (error: any) {
      console.error("Error occurred while fetching user by ID:", error.message);
      throw error;
    }
  },

  getUserProfile: async ({ token }: { token: string }) => {
    try {
      const res = await axios.get(
        ``,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      const data = await res.data;
      return data;
    } catch (error: any) {
      console.error("Error occurred while fetching user by ID:", error.message);
      throw error;
    }
  },
};

export default fetchers;
