import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import { asyncDecrease, increase } from "./actions/counterAction";
import { selectCounterValue } from './reducers/selectors';
const App = ()=> {
  const dispatch=useDispatch();

  const value=useSelector (selectCounterValue);

  

  const IncreaseHandler=()=> {
    dispatch(increase(value + 1));
    // console.log(value);
  };
  const AsyncDecreaseHandler=()=> {
    dispatch(asyncDecrease(value - 1));
    // console.log("decrease"+value); 
   };
  //  console.log(value);
    return (
    <div className='w-[100%]  p-5 text-center bg-green-300'>
     <h1 className='text-6xl'>{value}</h1>
     <button 
     onClick={IncreaseHandler}
     className='mt-2  '>Increase Counter by 1</button>
    <button
     onClick={AsyncDecreaseHandler}
     className='mt-2 ml-3 '>Decrease Counter by 1</button>
        </div>
  )
}

export default App
