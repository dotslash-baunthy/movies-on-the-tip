import { Toast, ToastContainer } from "react-bootstrap"

type Props = {
    message: string,
    error: boolean
}

const MyToasts = ({ message, error }: Props) => {
    return (
        <>
            <ToastContainer position="top-end" className="p-3">
                <Toast>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Bootstrap</strong>
                        <small className="text-muted">just now</small>
                    </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default MyToasts;