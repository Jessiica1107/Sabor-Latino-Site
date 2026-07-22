import './Footer.css';

const Footer = () => {

    return (
        <div className="Footer">
            <footer className="contact-us">
                <div className="business-hours">
                    <h3>Business Hours</h3>
                    <pre>
                        Sunday 10:00 AM - 2:00 AM{"\n"}
                        Monday 12:00 PM - 12:00 AM{"\n"}
                        Tuesday 12:00 PM - 12:00 AM{"\n"}
                        Wednesday 12:00 PM - 12:00 AM{"\n"}
                        Thursday 12:00 PM - 12:00 AM{"\n"}
                        Friday 12:00 PM - 4:00 AM{"\n"}
                        Saturday 10:00 AM - 4:00 AM
                    </pre>
                </div>

                <div className="social-info">
                    <h3>Follow Us:</h3>
                    <p>Connect with us on social media!</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/SaborLatinoQueens" target="_blank" rel="noopener noreferrer">
                            Facebook</a>

                        <a href="https://www.instagram.com/saborlatinony/" target="_blank" rel="noopener noreferrer">
                            Instagram</a>
                        <a href="https://www.tiktok.com/@SaborLatinoQueens" target="_blank" rel="noopener noreferrer">
                            TikTok</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;