function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./chelsea-logo.png" className="nav-logo" alt="chelsea logo"/>
                <ul className="nav-items">
                    <li><button><a href="https://www.premierleague.com/clubs/4/Chelsea/squad" target="_blank" rel="noreferrer noopener">Full Squad</a></button></li>
                    <li><button><a href="https://www.premierleague.com/clubs/4/Chelsea/results" target="_blank" rel="noreferrer noopener">Results</a></button></li>
                    <li><button><a href="https://www.premierleague.com/clubs/4/Chelsea/fixtures" target="_blank" rel="noreferrer noopener">Fixtures</a></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;