import './ErrorMsg.css'

function ErrorMsg(error) {
    console.log(error);
    return (
        <div className="container">
            <p className= "warning">{error.error}</p>
        </div>
    )
}

export default ErrorMsg;