import React from 'react'
import "./Comment.css"
const Comment = ({id,text,comments}) => {

  const children=comments.filter(c=> c.parentId===id);
  return (
    <div   className='comment'>
        <div className='comment-body'>
          <div className='comment-header'>
            <div>Dec 18, 2014 <span>John Doe</span> Says</div>
            <button>Replay</button>
          </div>
        {text}
        </div>
        { 
            children.map(c=>{
              return <Comment id={c.id} key={c.id} text={c.text} comments={comments}/>
            })
        }
    </div>
  )
}

export default Comment