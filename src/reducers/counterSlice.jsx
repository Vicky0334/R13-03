import { createSlice} from '@reduxjs/toolkit'
  const initialState = {
    value: 0
  }
 

export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        incremented:(state)=>{
            state.value+=1
        },
        decremented:(state)=>{
            state.value-=1
        }
    }

})
export default counterSlice.reducer;