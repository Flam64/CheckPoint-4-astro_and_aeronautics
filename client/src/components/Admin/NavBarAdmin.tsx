import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/userContext";
import "./navBarAdmin.css";

export default function NavBarAdmin() {
  const navigate = useNavigate();
  const { logout, userInfo } = useAuth();

  if (!userInfo) {
    navigate("/");
  }

  const handleOnclikLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div className="navBarAdmin">
        <nav>
          <ul className="navBarLink">
            <li>
              <NavLink to={"/newpublication"}>Nouvelle publication</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Créer un utilisateur</NavLink>
            </li>
          </ul>
        </nav>
        <button type="button" onClick={handleOnclikLogout}>
          Quitter
        </button>
      </div>
    </>
  );
}
