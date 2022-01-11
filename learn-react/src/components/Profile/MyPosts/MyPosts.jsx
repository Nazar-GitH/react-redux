import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = [
    {id: 1, message: "Lime", likesCount: 24},
    {id: 2, message: "Cherry", likesCount: 16},
    {id: 3, message: "Mango", likesCount: 42}
]

let postsElements = posts.map(p => <Post taste={p.message} likesCount={p.likesCount} /> )

  return (
    <div className={classes.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
        <textarea></textarea>
      <div>
      </div>
        <button>Add post</button>
        </div>
      </div>
      <div className={classes.post}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts