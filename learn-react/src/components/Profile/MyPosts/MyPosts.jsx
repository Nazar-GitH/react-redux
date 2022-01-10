import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return(
<div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
            <textarea></textarea>
            </div>
            <div>
            <button>Add post</button>
            </div>
        </div>
    <div className={classes.posts}>
    <Post message = 'It is pepsi-cola-lime' likesCount = '13'/>
    <Post message = 'It is pepsi-cola-mango' likesCount = '24'/>
    </div>
    </div>
    )
}

export default MyPosts
    