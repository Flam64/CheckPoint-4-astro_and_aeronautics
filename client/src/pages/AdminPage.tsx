import { Outlet } from "react-router-dom";
import NavBarAdmin from "../components/Admin/NavBarAdmin";

export default function AdminPage() {
  return (
    <>
      <header>
        <NavBarAdmin />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
