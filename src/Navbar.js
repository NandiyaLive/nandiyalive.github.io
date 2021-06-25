import { Link } from 'react-router-dom'

const Navbar = () => {
    const handleClick = () => {
        const element = document.body;
        element.classList.toggle("lite");
    }

    return (
        <div className="navbar">
            <div className="flex">
                <nav>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/works"><li>Works</li></Link>
                        <li><a href="https://blog.neranjana.tk" target="_blank" rel="noreferrer">Blog</a></li>
                        <li><p onClick={handleClick}><i className="fa fa-adjust"></i></p></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
