import { useSelector} from "react-redux";

const App = ()=> {
  const {value} = useSelector((state) => state.counterReducer);
  const IncreaseHandler=()=> {
    console.log("Increasing counter");
  //call(dispatch)the action and increase value by 1
   };
    return (
    <div className='w-[70%] mt-10 ml-20 text-center bg-green-300'>
     <h1 className='text-6xl'>{value}</h1>
     <button onclick={IncreaseHandler}
     className='mt-2 px-4 py-2 rounded-full  bg-blue-500'>
      Increase Counter by 1
     </button>
        </div>
  )
}

export default App
