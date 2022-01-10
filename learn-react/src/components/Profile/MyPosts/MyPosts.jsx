import React from 'react'
import classes from './MyPosts.module.css';
import Post from './Post/Post';

let postData = [
    {id: 1, message:'It is pepsi-cola-lime', likesCount: '13'},
    {id: 2, message: 'It is pepsi-cola-mango', likesCount: '24'}
]

let postsElement = postData.map(p => <Post message = {p.message} likesCount = {p.likesCount}/>
    )

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
    {postsElement}
    </div>
    </div>
    )
}

export default MyPosts
    