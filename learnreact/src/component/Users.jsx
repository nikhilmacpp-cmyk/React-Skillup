import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../features/users/userSlice';
import { selectActiveUserLessThan5 } from '../features/users/userSlice'

const Users = () => {
    const Dispatch = useDispatch();
    const {
        user = [],
        loading = false,
        error = null
    } = useSelector((state) => state.users);
    const filteredUsers =
        useSelector(
            selectActiveUserLessThan5
        )
    useEffect(() => {
        Dispatch(fetchUser())
    }, [])

    return loading ? <h5>Loading....</h5> :
        error ? <h5>{error}</h5> :
            <div>
                {
                    filteredUsers?.map((item, id) => <div key={id}>{item.name}</div>)
                }
            </div>
}

export default Users;