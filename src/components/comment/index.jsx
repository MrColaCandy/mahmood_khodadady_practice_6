import React from 'react'
import "./Comment.css"
const Comment = ({id,text,comments}) => {

  const newComments=comments.filter(comment=>comment.parentId===id);

  return (
    <div key={id} className='comment'>
        <div className='comment-body'>
          <div className='comment-header'>
            <div>Dec 18, 2014 <span>John Doe</span> Says</div>
            <button>Replay</button>
          </div>
        {text}
        </div>
        {
            newComments.map(c=>{
                return <Comment id={c.id} text={c.text} comments={newComments}/>
            })
        }
    </div>
  )
}

export default Comment