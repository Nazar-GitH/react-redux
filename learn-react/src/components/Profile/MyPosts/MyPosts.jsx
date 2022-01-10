import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
    {id: 1, message:'It is pepsi-cola-lime', likesCount: '13'},
    {id: 2, message: 'It is pepsi-cola-mango', likesCount: '24'}
]

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
    <Post message = {postData[0].message} likesCount = {postData[0].likesCount}/>
    <Post message = {postData[1].message} likesCount = {postData[1].likesCount}/>
    </div>
    </div>
    )
}

export default MyPosts
    