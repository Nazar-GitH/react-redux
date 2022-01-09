import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div>
            <div>
            <img src = "https://cdnb.artstation.com/p/assets/images/images/007/687/069/large/fady-habib-01-view-1-design.jpg?1507844944" alt = 'page'></img>
    </div>
    <MyPosts />
    </div>
    
    
    )
}

export default Profile;