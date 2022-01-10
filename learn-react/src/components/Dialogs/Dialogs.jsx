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


let dialogData = [
    {id: 1, name: "Marko"},
    {id: 2, name: "Yulian"},
    {id: 3, name: "Nazar"}
]

let messageData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'Yo'}
]

let dialogsElements = dialogData.map(d => <DialogItem name = {d.name} id = {d.id}/>
    )
    let messagesElements = messageData.map(m => <Message message = {m.message} />
        )

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

                <div className={classes.messages}>
                 {messagesElements}

                </div>

            </div>
        </div>
    )
}

export default Dialogs