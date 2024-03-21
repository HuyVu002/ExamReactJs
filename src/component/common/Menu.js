import { NavLink } from "react-router-dom";
function Menu(){

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  
                    <li class="nav-item">
                        <NavLink to={"/Home"} className="nav-link"><img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/FPT_logo_2010.svg/1200px-FPT_logo_2010.svg.png'} alt="Example" /></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to={"/Home"} className="nav-link"><b>Home</b></NavLink>
                    </li>
                    
                    <li class="nav-item">
                        <NavLink to={"/favorite"} className="nav-link"><b>Favorite</b></NavLink>
                    </li>
                    {/* <li class="nav-item">
                        <NavLink to={"/bookmart"} className="nav-link">Love ({love.length})</NavLink>                    
                    </li> */}
                </ul>
              
                </div>
            </div>
            </nav>
    );
}
export default Menu;