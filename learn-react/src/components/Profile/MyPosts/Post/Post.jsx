import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
return (
  <div className={classes.item}>
    <img src='https://static.winestreet.ru/off-line/goods_file/91061/file_L.jpg' alt='page'></img>
    {props.taste}
    <div>
      <span>Like</span> {props.likesCount}
    </div>
  </div>
)
}

export default Post