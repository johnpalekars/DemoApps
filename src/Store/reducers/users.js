import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState:{users:[],isLoading : true},
    reducers:{
        setUsers:(state,action)=>{
            return state = {...action.payload};
        },
    }

})



export const {setUsers} = userSlice.actions;
export default userSlice.reducer;