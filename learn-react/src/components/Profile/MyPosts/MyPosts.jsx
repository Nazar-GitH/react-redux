import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {


let postsElements = props.posts.map(p => <Post taste={p.message} likesCount={p.likesCount} /> )

let newPostElement = React.useRef();

let addPost = () => {
  let text = newPostElement.current.value;
  props.addPost(text) 
  newPostElement.current.value = ''
}

  return (
    <div className={classes.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
        <textarea ref={newPostElement}></textarea>
      <div>
      </div>
        <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.post}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts