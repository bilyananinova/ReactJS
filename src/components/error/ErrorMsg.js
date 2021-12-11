import './ErrorMsg.css'

function ErrorMsg({ error }) {
    return (
        <div className="container">
            <p className="warning">{error}</p>
        </div>
    )
}

export default ErrorMsg;