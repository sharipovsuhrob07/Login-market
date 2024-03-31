import "./NavBar.scss";
import Logo from "../../images/logoIcon.svg";
import HomeIcon from "../../images/homeIcon.svg";
import AddProductIcon from "../../images/addProductIcon.svg";
import { Link } from "react-router-dom";
import ProfileIcon from "../../images/profile.svg";
import Profile from "../../pages/profile/Profile";
import { useAuth } from "../../authentication/Authentication";

const NavBar = () => {
  const { user } = useAuth();
  return (
    <>
      <div className="navbar__main">
        <Link to="/">
          <img className="navbar_logo_icon" src={Logo} alt="logo" />
        </Link>
        <Link to="/">
          <img className="navbar_homepage_icon" src={HomeIcon} alt="icon" />
        </Link>
        <Link to="/add-product">
          <img
            className="navbar_productpage_icon"
            src={AddProductIcon}
            alt="icon"
          />
        </Link>

        <Link to="/profile">
          <img className="navbar_profilepage_icon" src={ProfileIcon} alt="profile" />
        </Link>
      </div>
    </>
  );
};

export default NavBar;
