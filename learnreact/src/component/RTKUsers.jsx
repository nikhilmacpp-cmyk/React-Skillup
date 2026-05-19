import {useGetUsersQuery} from '../features/api/apiSlice';

const RTKUsers = () =>{
    const {
        data,
        error,
        isLoading
    } = useGetUsersQuery();
    if (isLoading) {

    return <h1>Loading...</h1>

  }
  if (error) {

    return <h1>Error...</h1>

  }
  return (

    <div>

      <h1>RTK Query Users</h1>

      {
        data.map((user) => (

          <h3 key={user.id}>
            {user.name}
          </h3>

        ))
      }

    </div>

  )
}

export default RTKUsers