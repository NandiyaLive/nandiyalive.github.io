const About = () => {
    return (
        <section className="about">
            <h1>Hello <span className="wave">👋</span></h1>
            <p className="bio">
                I'm Neranjana Prasad Ponnamperuma (aka Nandiya), a 20 year old self
                taught web developer living in Kandy, Sri Lanka. I spend hours
                experimenting with HTML, CSS, and JavaScript; dabbling with Python.
                I’m curious, and I enjoy work that challenges me to learn something
                new and stretch in a different direction. Outside of coding, I enjoy
                spending my time reading novels, listening into music and podcasts, binge watching TV Series and{" "}
                <a href="https://en.wikipedia.org/wiki/Masala_film" target="_blank "><u>Masala films</u></a> 🙊
                </p>

            <div className="grid pt-1">
                <div>
                    <p className="subhead">WHAT I USE </p>
                    <p>OS : Linux Lite</p>
                    <p>Browsers : Firefox / Brave</p>
                    <p>Code Editor : Visual Studio Code</p>
                    <p>Hardware : HP Compaq Elite 8300</p>
                </div>
                <div>
                    <p className="subhead">I WORK WITH</p>
                    <ul className="work-with">
                        <li><img src="./html5.svg " alt="" title="HTML5" /></li>
                        <li><img src="./css3.svg " alt="" title="CSS3" /></li>
                        <li><img src="./sass.svg" alt="" title="Sass" /></li>
                        <li><img src="./bs.svg " alt="" title="Bootstrap" /></li>
                        <li><img src="./bulma.svg " alt="" title="Bulma" /></li>
                        <li><img src="./js.svg " alt="" title="JavaScript" /></li>
                        <li><img src="./react.svg " alt="" title="React.js" /></li>
                        <li><img src="./next-js.svg " alt="" title="Next.js" /></li>
                        <li><img src="./python.svg " alt="" title="Python" /></li>
                        <li><img src="./flask.svg " alt="" title="Flask" /></li>
                        <li><img src="./git.svg " alt="" title="Git" /></li>
                        <li><img src="./tux.svg " alt="" title="Linux" /></li>
                        <li><img src="./cli.svg " alt="" title="CLI" /></li>
                    </ul>
                </div>
            </div>

            <div className="grid py-2">
                <div>
                    <p class="subhead">WHAT HEALS ME</p>
                    <div class="heal">
                        <a href="https://open.spotify.com/playlist/4oKjrCt8bfJCLQxL635Ftq" target="_blank" rel="noreferrer"><img
                            src="./spotify.svg" alt="" /></a>
                        <a href="https://trakt.tv/users/nandiyalive" target="_blank" rel="noreferrer"><img src="./trakt.svg" alt="" /></a>
                    </div>
                </div>
                <div>
                    <p className="subhead">ACHIEVEMENTS</p>
                    <p><i className="fa fa-check-circle"></i><a href="https://freecodecamp.org/certification/nandiyalive/responsive-web-design" target="_blank" rel="noreferrer">Responsive Web Design</a></p>
                    {/* <p><i className="fa fa-check-circle" title="Curruntly Working On"></i>JavaScript Algorithms and Data Structures</p>
                    <p><i className="fa fa-check-circle" title="Curruntly Working On"></i>Front End Development Libraries</p> */}
                </div>
            </div>
        </section>
    );
}

export default About;
