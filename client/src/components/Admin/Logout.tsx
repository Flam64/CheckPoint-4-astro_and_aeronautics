import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/userContext";

export default function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  logout();
  navigate("/");
}
