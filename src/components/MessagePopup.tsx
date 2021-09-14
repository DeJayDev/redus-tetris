import { Fragment } from "react";
import '../css/MessagePopup.css'

function MessagePopup(props: any) {
    return <Fragment>
        <div className="message-popup">
            <h1>Message Title</h1>
            <p>Message Content</p>
        </div>
    </Fragment>
}

export default MessagePopup;
