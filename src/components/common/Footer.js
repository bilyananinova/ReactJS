import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="site-footer">
                <section className="footer-wrapper">
                    <section className="contacts">
                        <h6 className="footer-title">Contacts</h6>
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
                        <h6 className="footer-title">Links</h6>
                        <ul>
                            <li><Link to="/">Help & FAQs</Link></li>
                            <li><Link to="/">Terms and Condition</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                            <li><Link to="/">Delivery</Link></li>
                            <li><Link to="/">Refer a Friend</Link></li>
                        </ul>
                    </section>

                    <section className="social-media">
                        <h6 className="footer-title">Social media</h6>
                        <ul>
                            <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter-square"></i></a></li>
                            <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </section>
                </section>
            </footer>
            <section className="copyright">
                <p>Copyright &copy; 2021 - All Rights Reserved - <Link to="/">Wine Store ReactJS</Link></p>
            </section>
        </>
    )
}

export default Footer;