import React from 'react'
import {useSelector,useDispatch} from 'react-redux' 
import { selectAllPost } from './postsSlice'
const PostList = () => {

    const posts=useSelector(selectAllPost)
    const postRender=posts.map(post => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.description.substring(0,50)}</p>
        <p>Written by {post.authorId}</p>
      </article>
    ))
    console.log(posts)
  return (
    <div>
      {postRender}
    </div>
  )
}

export default PostList