import { useState } from 'react'
import { useGetUsersQuery, useAddPostMutation } from '../features/api/apiSlice';

const RTKUsers = () => {
  const [title, setTitle] = useState("")

  const [

    addPost,

    {
      isLoading,
      isSuccess,
      error,
      data
    }

  ] = useAddPostMutation();

  const submitHandler = async() => {
  try {
    const data = {
      title,
      body: "Learning RTK Query"
    }
    await addPost(data)
  } catch (err) {
    console.log('error while post', err)
  }
}

if (isLoading) {

  return <h1>Loading...</h1>

}
if (error) {

  return <h1>Error...</h1>

}
console.log('data',data)
return (
  <div>
    <h1>RTK Query Users</h1>
    <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
    <button onClick={submitHandler}>ADD POST</button>
    {
     data && (
          <h2>{data.title}</h2>
        )
    }

  </div>

)
}

export default RTKUsers