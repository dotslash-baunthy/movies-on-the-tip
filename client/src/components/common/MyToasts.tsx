import { Toast, ToastContainer } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css'

type Props = {
    message: string,
    error: boolean
}

const MyToasts = ({ message, error }: Props) => {
    return (
        <>
            <ToastContainer position="top-end" className="p-3">
                <Toast bg="success">
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default MyToasts;