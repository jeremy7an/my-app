import { Fragment } from "react"
import { NavLink } from "react-router-dom"


export const NavBar = () =>
{
  const imageLink = "https://www.isoftstoneinc.com/wp-content/uploads/2020/03/iss_logo_light.png";
  return(
    <Fragment>
      <nav className="flex_row nav_container">
        <div>
        <NavLink to="/"> 
            <img src={imageLink} alt={"isoftstone"} width="150px" height="31px"/>
          </NavLink>
        </div>
        
          <div className="nav_bar_container">
            <NavLink className="nav_link" to="/">Home</NavLink>
            <NavLink className="nav_link" to="/product">Products</NavLink>
            <NavLink className="nav_link" to="/checkout">Checkout</NavLink>
          </div>
        
      </nav>
    </Fragment>
  )
}