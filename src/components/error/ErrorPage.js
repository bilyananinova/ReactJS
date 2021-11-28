import './ErrorPage.css';
import { Link } from "react-router-dom";

function ErrorPage() {
    return (
        <>
            <section className="error-wrapper">
                <div>
                    <h1 className="error-status">404</h1>
                    <h4 className="error-heading">OOPS... PAGE IS NOT FOUNT!</h4>
                    <p className="error-content">Don't worry! Just follow the link bellow to back home page</p>
                    <Link className="error-link" to="/">Home</Link>
                </div>
            </section>
        </>
    );
}

export default ErrorPage;