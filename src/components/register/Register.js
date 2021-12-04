import './Register.css';
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../services/authService";
import ErrorMsg from "../error/ErrorMsg";

function Register() {
    let [error, setError] = React.useState('');
    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();

        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let rePassword = e.target.rePassword.value;

        if (name === '' || email === '' || password === '') {
            return setError('All fields are required!');
        }

        if (password.length < 6) {
            return setError('Password must be at least 6 characters long!');
        }

        if (password !== rePassword) {
            return setError('Password missmatch!');
        }

        register(name, email, password)
            .then(user => {
                setError('');
                e.target.reset();
                history.push('/');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <>
            <h3>Register Page</h3>
            <section className="form-wrapper">
                <section className="form-section">
                    {error ? <ErrorMsg error={error} /> : ""}
                    <form className="register-form" onSubmit={handleSubmit}>
                        <label htmlFor="register-name">Name <span className="required">*</span></label>
                        <input type="text" className="form-input" id="register-name" name="name" placeholder="Ivan Ivanov" />
                        <label htmlFor="register-email">Email address<span className="required">*</span></label>
                        <input type="email" className="form-input" id="register-email" name="email" placeholder="ivan@mail.bg" />
                        <label htmlFor="register-password">Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="register-password" name="password" placeholder="******" />
                        <label htmlFor="register-repeat-password">Repeat Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="register-repeat-password" name="rePassword" placeholder="******" />
                        <button type="submit" className="register-button">Register</button>
                        <p>Already have an account... <Link to="/login">Login</Link> now.</p>
                    </form>
                </section>
                <section className="form-img">
                    <img src="https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                </section>
            </section>
        </>
    )
}

export default Register;