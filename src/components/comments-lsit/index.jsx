import React from 'react'
import Comment from '../comment'
import "./CommentsList.css"
const CommentsList = ({comments=[]}) => {
  return (
    
        <div className='comments-list'>
            
            {
            renderComments(comments)
            
            }
            
       </div>
    
  )
}

export default CommentsList

function renderComments(comments) {
    return comments.map(comment => {
        return <Comment id={comment.id} text={comment.text} comments={comments} />
    })
}
