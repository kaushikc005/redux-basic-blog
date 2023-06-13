import React from 'react'
import {useSelector} from 'react-redux' 
import { selectAllPost } from './postsSlice'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { parseISO } from 'date-fns'
import ReactionButtons from './ReactionButtons'

const PostList = () => {

    const posts=useSelector(selectAllPost)
    const postRender=posts.map(post => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.description.substring(0,50)}</p>
        <p>Written by {post?.authorId || "Unknown"} {formatDistanceToNow(parseISO(post.createdAt))} ago</p>
      
        <ReactionButtons post={post}/>
      </article>
    ))
    console.log(posts)
  return (
    <div className='articleContainer'>
      {postRender}
    </div>
  )
}

export default PostList