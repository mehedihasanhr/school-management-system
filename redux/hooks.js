import { useSelector, useDispatch } from "react-redux";

export const useRedux = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    return [state, dispatch];
} 