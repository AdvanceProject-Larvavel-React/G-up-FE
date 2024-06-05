import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    inforStore : {}
}
const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    getInforStore : (state , action) => {
        state.inforStore = action.payload
    }
  }
});
export const { getInforStore} = storeSlice.actions
export default storeSlice.reducer