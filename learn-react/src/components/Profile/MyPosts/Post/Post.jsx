import React from 'react'
import classes from './Post.module.css';


const Post = (props) => {
    return(
  <div>
        <div className={classes.item}>
            <img src='https://static.winestreet.ru/off-line/goods_file/91061/file_L.jpg'></img>
        {props.message}
        </div>
        <span>like</span> {props.likesCount}
    </div>
    )
}

export default Post