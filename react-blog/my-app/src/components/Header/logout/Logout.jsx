import { Link } from "react-router-dom";
import iconLogin from "../../../assets/icon-login.svg";
import iconRegister from "../../../assets/icon-register.svg";

export default function Logout() {
  return (
    <>
      <li>
        <Link to="#" className="button gray">
          <img src={iconLogin} alt="" />
          <span>Login</span>
        </Link>
      </li>
      <li className="only-pc">
        <Link to="#" className="button gray">
          <img src={iconRegister} alt="" />
          <span>Register</span>
        </Link>
      </li>
    </>
  );
}
