import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import { asyncDecrease, increase } from "./actions/counterAction";
import { selectCounterValue } from './reducers/selectors';
const App = ()=> {
  const dispatch=useDispatch();
  const value=useSelector (selectCounterValue);
  console.log(value);
  const IncreaseHandler=()=> {
    dispatch(increase(value + 1));
   
  };
  const AsyncDecreaseHandler=()=> {
    dispatch(asyncDecrease(value - 1));
    // console.log("decrease"); 
   };

    return (
    <div className='w-[70%] mt-10 ml-20 text-center bg-green-300'>
     <h1 className='text-6xl'>{value}</h1>
     <button 
     onClick={IncreaseHandler}
     className='mt-2 px-4 py-2 rounded-full  bg-blue-500'>Increase Counter by 1</button>
    <button
     onClick={AsyncDecreaseHandler}
     className='mt-2 ml-3 px-4 py-2 rounded-full  bg-blue-500'>Decrease Counter by 1</button>
        </div>
  )
}

export default App
