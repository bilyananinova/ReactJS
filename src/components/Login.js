import './Login.css'

function Login() {
    return (
        <>
            <main>
                <h4>Login Page</h4>
                <div className="form-wrapper">
                    <section className="form-img">
                        <img src="https://images.unsplash.com/photo-1605701250884-56644288b8ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80" />
                    </section>
                    <section>
                        <form className="login-form">
                            <label htmlFor="login-email">Email address<span className="required">*</span></label>
                            <input type="email" className="form-input" id="login-email" placeholder="ivan@mail.bg" required />
                            <label htmlFor="login-password">Password <span className="required">*</span></label>
                            <input type="password" className="form-input" id="login-password" placeholder="****" required />
                            <button type="submit" className="login-button">Login</button>
                        </form>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Login;