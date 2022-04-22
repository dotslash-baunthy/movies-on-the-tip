import 'bootstrap/dist/css/bootstrap.css'
import { ToastContainer, Toast } from "react-bootstrap";

type Props = {
    message: string,
    error: boolean
}

const MyToasts = ({ message, error }: Props) => {

    let el;

    if (error) {
        el = <>
            <ToastContainer position="top-end" className="p-3">
                <Toast bg="success">
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    }

    else {
        el = <>
            <ToastContainer position="top-end" className="p-3">
                <Toast bg="success">
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    }

    return (el);
}

export { MyToasts };