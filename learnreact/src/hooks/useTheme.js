import {useSelector} from 'react-redux';

const useToggle = () =>{
    return useSelector((state)=>state.theme.mode)
}

export  default useToggle;