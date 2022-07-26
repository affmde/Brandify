import { Toast } from "react-bootstrap"

export const MessageToast = (props) => {
    return(
        <Toast>
            <Toast.Body>{props.message} </Toast.Body>
        </Toast>
    )
}