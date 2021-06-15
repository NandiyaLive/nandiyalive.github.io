const Works = () => {
    return (
        <section className="works">
            <div className="grid grid-3">
                <div className="card">
                    <p className="sm-2 is-500 pb-1-sm">Instagram Downloader Bot</p>
                    <p>A bot that can help you to download media from Instagram over Telegram.</p>
                    <p className="ref">
                        <a href="https://github.com/NandiyaLive/xIGDLBot" title="View on GitHub" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://t.me/xIGDLBot" title="View on Telegram" target="_blank" rel="noreferrer">
                            <i className="fab fa-telegram-plane"></i>
                        </a>
                    </p>
                </div>

                <div className="card">
                    <p className="sm-2 is-500 pb-1-sm">PSARips Links Scraper</p>
                    <p>A simple Python script to extract download links from PSARips website.</p>
                    <p className="ref">
                        <a href="https://github.com/NandiyaLive/PSALinkGrabber" title="View on GitHub" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </p>
                </div>

                <div className="card">
                    <p className="sm-2 is-500 pb-1-sm">News API</p>
                    <p>API to fetch news from AdaDerana website, a major news network in Sri Lanka.</p>
                    <p className="ref">
                        <a href="https://github.com/NandiyaLive/NewsAPI" title="View on GitHub" target="_blank" rel="noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://api.neranjana.ga/news" title="View API" target="_blank" rel="noreferrer">
                            <i className="fa fa-globe"></i>
                        </a>
                    </p>
                </div>
            </div>

            <p className="pt-2">
                These projects are Open Sourced and licensed under MIT license. Source
                Codes and other projects can be found on GitHub.
            </p>

            {/* <div className="pt-3 clients">
                <p className="capitalized sm-3 is-500">Clients</p>
            </div> */}

            <footer>
                <p>Made with <i className="fa fa-heart"></i>+<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <i className="fab fa-react"></i></a> by
                    <a href="https://twitter.com/NandiyaLive" target="_blank" rel="noreferrer"> @NandiyaLive</a>
                </p>
                <p>Hosted on <a href="https://netlify.com" target="_blank" rel="noreferrer">Netlify</a>.
                    Source code on <a href="https://github.com/NandiyaLive/nandiyalive.github.io" target="_blank" rel="noreferrer">Github</a>.
                </p>
            </footer>
        </section >
    );
}

export default Works;
