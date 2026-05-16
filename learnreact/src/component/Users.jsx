import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {fetchUser} from '../features/users/userSlice';

const Users = ()=>{
    const Dispatch = useDispatch();
    const {
        user=[],
        loading=false,
        error=null
    } = useSelector((state)=>state.users);

useEffect(()=>{
    Dispatch(fetchUser())
},[])
console.log('user',user)
return loading ? <h5>Loading....</h5>:
        error ? <h5>{error}</h5> :
        <div>
            {
                user?.map((item,id)=><div key={id}>{item.name}</div>)
            }
        </div>
    }

export default Users;