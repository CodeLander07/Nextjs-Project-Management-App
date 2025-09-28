import {createSlice , PayloadAction} from '@reduxjs/toolkit';
export interface initalStateTypes{
    isSidebarCollapsed: boolean;
}



const initialState: initalStateTypes = {
    isSidebarCollapsed: false,
};

export const globalSlice = createSlice({
    name:"global",
    initialState,
    reducers:{
        setSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload;
        }
    }
})

export const { setSidebarCollapsed } = globalSlice.actions;

export default globalSlice.reducer;