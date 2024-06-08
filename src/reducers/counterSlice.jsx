import { createSlice} from '@reduxjs/toolkit'
const initialState = {
    value: 0,
  };
 

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increase:( state)=>{
           state.value+=1;
        },
        decrease:(state)=>{
            state.value-=1;
        }
    }

});
export default counterSlice.reducer;
export const {increase,decrease} =counterSlice.actions;
// counterSlice.actions
