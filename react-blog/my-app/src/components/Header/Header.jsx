import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { Link } from "react-router-dom";
import Login from "./login/Login";
import Logout from "./logout/Logout";
import imgLogo from "../../assets/Logo.svg";
import "./header.css";

export default function Header() {
  const { isLogin } = useContext(UserContext);
  // console.log(isLogin); // true
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to="/">
              <img src={imgLogo} alt="My Blog" />
            </Link>
          </h1>
          <ul>{isLogin ? <Login /> : <Logout />}</ul>
        </div>
      </header>
    </>
  );
}
