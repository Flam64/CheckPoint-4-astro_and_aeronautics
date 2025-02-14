import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../App.css";
export default function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handleKeyUp = (event: { key: string }) => {
    event.key === "Enter";
  };

  return (
    <>
      <div className="navBar">
        <img
          className="logo"
          src="../../src/assets/images/fond-2.png"
          alt="logo du blog"
          onClick={handleClick}
          onKeyUp={handleKeyUp}
        />
      </div>

      <div className="listAndSearch">
        <nav>
          <ul className="navBarLink">
            <li>
              <NavLink to={"/"}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Astronomie</NavLink>
            </li>
            <li>
              <NavLink to={"/news"}>Aéronautique</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
