import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

let newPostElement = React.useRef()

let addPost = () => {
  props.addPost();
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}

let postsElements = props.posts.map(p => <Post taste={p.message} likesCount={p.likesCount} /> )

  return (
    <div className={classes.postsBlock}>
      <h3>My post</h3>
      <div>
        <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
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