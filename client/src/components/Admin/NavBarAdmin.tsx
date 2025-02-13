import { NavLink } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import "./navBarAdmin.css";

export default function NavBarAdmin() {
  //const navigate = useNavigate();

  return (
    <>
      <div className="navBarAdmin">
        <nav>
          <ul className="navBarLink">
            <li>
              <NavLink to={"/newpublication"}>Nouvelle publication</NavLink>
            </li>
            <li>
              <NavLink to={"/news"}>Créer un utilisateur</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
