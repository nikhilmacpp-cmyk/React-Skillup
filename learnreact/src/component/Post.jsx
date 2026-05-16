import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react'
import { addPost } from '../features/posts/postsSlice'
const Posts = () => {
    const {
        loading = false,
        post = null,
        error = null
    } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const handleSubmit = async () => {
        try {
            const postData = {
                title,
                body: 'learning redux'
            }
           dispatch(addPost(postData));
        } catch (e) {
            console.log('error while posting', e)
        }
    }

    return (
        <div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <div>
                <button onClick={handleSubmit}>SUBMIT TITLE</button>
            </div>
            {loading ? <h5>Loading....</h5> :
                error ? <h5>{error}</h5> :
                    <div>
                        {post?.title}
                    </div>}
        </div>
    )
}

export default Posts;