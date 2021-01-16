const { NavLink } = ReactRouterDOM;

export function AppHeader(props) {

    return   <nav>
        <ul className="nav-list">
        <li><h2><NavLink  exact to="/" className="header-link">GeoGram</NavLink></h2></li>  {/*activeClassName="my-active"*/}
        {/* <li><h2><NavLink to="/keeper" className="header-link">Keeper</NavLink></h2></li> */}
        {/* <li><h2 className="mail-link"><NavLink to="/mail" className="header-link">Mail</NavLink></h2></li> */}
        {/* <li><NavLink to="/about">About</NavLink></li> */}
        </ul>
        </nav>
    
}

