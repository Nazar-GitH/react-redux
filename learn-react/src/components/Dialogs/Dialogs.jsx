import React from "react";
import classes from './Dialogs.module.css';
import { NavLink } from "react-router-dom";


let DialogItem = (props) => {
 <div className={classes.dialog}>
<NavLink to = {'/dialogs/' + props.id}>{props.name}</NavLink>
</div>
}

let Message = (props) => {
    <div className={classes.dialog}>{props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name = 'Marko' id = '1'/>
                <DialogItem name = 'Yulian' id = '2'/>
                <DialogItem name = 'Nazar' id = '3'/>

                <div className={classes.messages}>
                  <Message message = 'Hello'/>
                  <Message message = 'How are you?'/>
                  <Message message = 'Yo'/>

                </div>

            </div>
        </div>
    )
}

export default Dialogs