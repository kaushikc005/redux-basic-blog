import React from 'react'
import { useDispatch } from "react-redux"
import { addReactions } from './postsSlice'





const ReactionButtons = ({post}) => {
    const reactionEmoji = {
        thumbsUp: '👍',
        wow: '😮',
        heart: '❤️',
        coffee: '☕',
        rocket: '🚀',
    }
     
    const dispatch=useDispatch()
    const renderButtons= Object.entries(reactionEmoji).map(([name,emoji])=>(
        <button
        onClick={()=> dispatch(addReactions({postId:post.id,reaction:name}))}
        >{emoji} {post.reactions[name]}</button>
    ))
    
  return (
    <div>{renderButtons}</div>
  )
}

export default ReactionButtons