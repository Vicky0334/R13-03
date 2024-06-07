export{increase}from"../reducers/counterSlice";


import { decrease } from "../reducers/counterSlice";

export const asyncDecrease =(value)=> async(dispatch,getState)=>{
  
    try{
        setTimeout(()=>{
            dispatch(decrease(value));
        },1000)
    }
        catch(e){
            console.log(e)
        }
    }
