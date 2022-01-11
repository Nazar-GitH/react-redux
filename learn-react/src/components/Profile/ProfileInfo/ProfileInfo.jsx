import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
return (
<div>
<div>
<img src = "https://pepsi.ru/assets/img/promo/banner3.png" alt = 'page'></img>
</div>
<div className={classes.descriptionBlock}>
  ava + description 
</div>
</div>
)
}

export default ProfileInfo