import { useSelector} from "react-redux";


export const selectCounterValue  = (state) =>state.counterReducer ? state.counterReducer.value : 0;
