import { createSlice} from '@reduxjs/toolkit'
  const initialState = {
    value: 0,
  };
 

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increase:( initialstate,action)=>{
           initialstate.value+=action.payload;
        },
        decrease:(initialstate,action)=>{
            initialstate.value-=action.payload;
        }
    }

});
export default counterSlice.reducer;
export const {increase,decrease} =counterSlice.actions;
// counterSlice.actions
