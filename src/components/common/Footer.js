import './Footer.css'

function Footer() {
    return (
        <>
            <footer className="site-footer">
                <section className="footer-wrapper">
                    <section className="contacts">
                        <h6>Contacts</h6>
                        <ul>
                            <li>
                                <address>
                                    Street Name &amp; Number, Town, Postcode/Zip
                            </address>
                            </li>
                            <li>+359 888 000 000</li>
                            <li>email@mail.bg</li>
                        </ul>
                    </section>

                    <section className="links">
                        <h6>Links</h6>
                        <ul>
                            <li><a href="/">Help & FAQs</a></li>
                            <li><a href="/">Terms and Condition</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Delivery</a></li>
                            <li><a href="/">Refer a Friend</a></li>
                        </ul>
                    </section>

                    <section className="social-media">
                        <h6>Social media</h6>
                        <ul>
                            <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter-square"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </section>
                </section>
            </footer>
            <section className="copyright">
                <p>Copyright &copy; 2021 - All Rights Reserved - <a href="/">Winery ReactJS</a></p>
            </section>
        </>
    )
}

export default Footer;