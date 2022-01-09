import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs-items}>
                <div className={classes.dialog}>
                  Marko
                </div>
                <div className={classes.dialog}>
                    Yulian
                </div>
                <div className={classes.dialog}>
                    Nazar
                </div>

                <div className="messages">
                    <div className="message">
                        Hello
                    </div>
                    <div className="message">
                        How are you?
                        </div>
                        <div className="message">
                        Yo
                        </div>
                </div>



            </div>
        </div>
    )
}

export default Dialogs