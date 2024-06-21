// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// type ReduxUser = {
//   userInfo: UserPropsWithoutPassword;
//   isUser: boolean;
// };

// const initialState: ReduxUser = {
//   isUser: false,
//   userInfo: {
//     email: "",
//     full_name: "",
//     is_banned: false,
//     pfp: "",
//     provider_id: "",
//     status_id: "",
//     user_id: "",
//     user_name: "",
//   },
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     updateUserInfo: (
//       state,
//       action: PayloadAction<UserPropsWithoutPassword>
//     ) => {
//       state.userInfo = {
//         ...state.userInfo,
//         ...action.payload,
//       };
//     },

//     updateIsUser: (state, action: PayloadAction<boolean>) => {
//       state.isUser = action.payload;
//     },

//     reset: (state) => {
//       Object.assign(state, initialState);
//     },
//   },
// });

// export const { updateUserInfo, reset, updateIsUser } = userSlice.actions;
// export default userSlice.reducer;
