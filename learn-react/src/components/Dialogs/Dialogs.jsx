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

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name = {dialogData[0].name} id = {dialogData[0].id}/>
                <DialogItem name = {dialogData[1].name} id = {dialogData[1].id}/>
                <DialogItem name = {dialogData[2].name} id = {dialogData[2].id}/>

                <div className={classes.messages}>
                  <Message message = {messageData[0].message} />
                  <Message message = {messageData[0].message} />
                  <Message message = {messageData[0].message} />

                </div>

            </div>
        </div>
    )
}

export default Dialogs