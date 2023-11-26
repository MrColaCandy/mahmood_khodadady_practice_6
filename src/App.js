import React from 'react'
import comments from "./data/comments.json"
import CommentsList from './components/comments-lsit'
import CommentsBox from './components/comments-box'
import Header from './components/header'
const App = () => {
  return (
   <div>
    {
      <CommentsBox>
        <Header/>
        <CommentsList comments={comments}/>
      </CommentsBox>
    }
   </div>
  )
}

export default App