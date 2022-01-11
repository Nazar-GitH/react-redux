import React from 'react'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {
    
    let dialogs = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Paul'},
        {id: 3, name: 'James'},
        {id: 4, name: 'Anderson'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How your new tastes pepsi?'},
        {id: 3, message: 'It is so good!'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name = {d.name} id ={d.id} /> );
    let messegesElements = messages.map(m => <Message message = {m.message} /> );


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
            {dialogsElements}
            </div>
            <div className={classes.messages}>
            {messegesElements}
            </div>
        </div>
    )
}

export default Dialogs