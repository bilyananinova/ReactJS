import './Login.css';
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from '../../services/authService';

function Login() {
    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        let email = e.target.email.value;
        let password = e.target.password.value;

        login(email, password)
            .then(user => {
                e.target.reset();
                history.push('/');
            })
    }

    return (
        <>
            <h2>Login Page</h2>
            <div className="form-wrapper">
                <section className="form-img">
                    <img src="https://images.unsplash.com/photo-1605701250884-56644288b8ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" alt="" />
                </section>
                <section className="form-section">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <label htmlFor="login-email">Email address<span className="required">*</span></label>
                        <input type="email" className="form-input" id="login-email" name="email" placeholder="ivan@mail.bg" required />
                        <label htmlFor="login-password">Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="login-password" name="password" placeholder="******" required />
                        <button type="submit" className="login-button">Login</button>
                        <p>Don't have an account? <Link to="/register">Register</Link> now.</p>
                    </form>
                </section>
            </div>
        </>
    )
}

export default Login;