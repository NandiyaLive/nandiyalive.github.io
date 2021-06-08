const Home = () => {

    const openContactForm = () => {
        document.querySelector('.contact').style.visibility = "visible";
    };
    const closeContactForm = () => {
        document.querySelector('.contact').style.visibility = "hidden";
    };

    return (
        <section className="home">
            <div className="grid">
                <div className="avatar">
                    <img src="avatar.webp" alt="" />
                </div>
                <div className="text-left bio">
                    <p className="md-2 is-500">Neranjana <br />Prasad</p>
                    <p>Tech Enthusiast • Web Developer • Linux User</p>
                    <hr />
                    <div className="social-icons">
                        <a href="www.linkedin.com/in/neranjanaprasad" title="Linkedin" target="_blank" rel="noreferrer"><i
                            className="fab fa-linkedin"></i></a>

                        <a href="https://github.com/NandiyaLive" title="GitHub" target="_blank" rel="noreferrer"><i
                            className="fab fa-github"></i></a>

                        <a href="https://twitter.com/NandiyaLive" title="Twitter" target="_blank" rel="noreferrer"><i
                            className="fab fa-twitter"></i></a>

                        <a href="https://instagram.com/NandiyaLive" title="Instagram" target="_blank" rel="noreferrer"><i
                            className="fab fa-instagram"></i></a>
        
                        <a href="https://t.me/NandiyaLive" title="Telegram" target="_blank" rel="noreferrer"><i
                            className="fab fa-telegram-plane"></i></a>
                    </div>

                    <button className="btn" onClick={openContactForm}>Hire Me</button>
                </div>
            </div>

            <div className="contact">
                <div className="contact-form">
                    <i className="fa fa-times-circle pb-2" onClick={closeContactForm}></i>
                    <p className="sm-4 is-500 capitalized">Send a message</p>
                    <form action="https://formspree.io/xyynwlly" method="POST">
                        <div className="grid">
                            <input type="text" id="name" name="name" placeholder="Name" required />
                            <input type="email" id="email" name="email" placeholder="Email" required />
                        </div>
                        <input type="subject" id="subject" name="subject" placeholder="Subject" />
                        <textarea name="message" id="message" cols="" rows=""
                            placeholder="Leave Your Message" required></textarea>
                        <button type="submit" class="btn pt-4">Send Message</button>
                    </form>

                    <p className="sm-4 is-500 capitalized pt-3">Or hire on</p>
                    <a href="https://www.fiverr.com/neranjanaprasad" title="Hire me on Fiverr" target="_blank" rel="noreferrer"><img src="./fiverr.svg" alt="" /></a>
                </div>
            </div>
        </section>
    );
}

export default Home;
