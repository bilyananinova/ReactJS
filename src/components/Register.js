import './Register.css'

function Register() {
    return (
        <>
            <h3>Register Page</h3>
            <section className="form-wrapper">
                <section className="form-img">
                    <img src="https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                </section>
                <section>
                    <form className="register-form">
                        <label htmlFor="register-name">Name <span className="required">*</span></label>
                        <input type="text" className="form-input" id="register-name" placeholder="Ivan Ivanov" required />
                        <label htmlFor="register-email">Email address<span className="required">*</span></label>
                        <input type="email" className="form-input" id="register-email" placeholder="ivan@mail.bg" required />
                        <label htmlFor="register-password">Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="register-password" placeholder="****" required />
                        <label htmlFor="register-repeat-password">Repeat Password <span className="required">*</span></label>
                        <input type="password" className="form-input" id="register-repeat-password" placeholder="****" required />
                        <button type="submit" className="register-button">Register</button>
                    </form>
                </section>
            </section>
        </>
    )
}

export default Register;