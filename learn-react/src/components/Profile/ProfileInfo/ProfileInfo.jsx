import React from 'react'
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
            <img src = "https://cdnb.artstation.com/p/assets/images/images/007/687/069/large/fady-habib-01-view-1-design.jpg?1507844944" alt = 'page'></img>
    </div>
    <div className={classes.descriptionBlock}>
    ava + description
    </div>
    </div>
    )

}

    export default ProfileInfo;