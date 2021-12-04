import './Login.css';
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from '../../services/authService';
import ErrorMsg from "../error/ErrorMsg";

function Login() {
    let [error, setError] = React.useState('');
    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;

        if (email === '' || password === '') {
            return setError('All fields are required!');
        }

        if (password.length < 6) {
            return setError('Password must be at least 6 characters long!')
        }

        login(email, password)
            .then(user => {
                setError('');
                e.target.reset();
                history.push('/');
            })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <>
            <h3>Login Page</h3>
            <div className="form-wrapper">
                <section className="form-img">
                    <img src="https://images.unsplash.com/photo-1605701250884-56644288b8ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="" />
                </section>
                <section className="form-section">
                    {error ? <ErrorMsg error={error} /> : ""}
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="login-email">Email address<span className="required">*</span></label>
                        <input type="email" className="form-input" id="login-email" name="email" placeholder="ivan@mail.bg" />
                        <label htmlFor="login-password">Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="login-password" name="password" placeholder="******" />
                        <button type="submit" className="login-button">Login</button>
                        <p>Don't have an account? <Link to="/register">Register</Link> now.</p>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Login;