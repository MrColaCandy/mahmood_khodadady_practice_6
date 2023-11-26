import React from 'react'
import "./CommentsBox.css"
const CommentsBox = ({children}) => {
  return (
    <div className='comments-box' >{children}</div>
  )
}

export default CommentsBox