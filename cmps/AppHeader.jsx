const { NavLink } = ReactRouterDOM;

export function AppHeader(page) {

    return  <div className="header">

     <div className="header-main-container">
        {/* <div className="nav-list"> */}
        <NavLink  exact to="/" className="header-link">Geogram</NavLink> {/*activeClassName="my-active"*/}
        {/* </div> */}
        <input placeholder="Search" type="text" name="search"></input>
        </div>
    </div>
    
    {/* <li><h2><NavLink to="/keeper" className="header-link">Keeper</NavLink></h2></li> */}
    {/* <li><h2 className="mail-link"><NavLink to="/mail" className="header-link">Mail</NavLink></h2></li> */}
    {/* <li><NavLink to="/about">About</NavLink></li> */}

    
}

