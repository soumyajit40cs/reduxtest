import { createSlice } from "@reduxjs/toolkit";

//const initialState = [];

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    adduser(state, action) {
      state.push(action.payload);
      localStorage.setItem('key-user', state);
    },
    removeuser(state, action) {
      console.log(1);
    },
    bulkdelete(state, action) {
      console.log(1);
    },
  },
});

export const { adduser, removeuser, bulkdelete } = userSlice.actions;
export default userSlice.reducer;
