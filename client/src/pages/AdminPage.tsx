import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
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
			<ToastContainer
				position="top-center"
				autoClose={6000}
				hideProgressBar={true}
				newestOnTop={false}
				closeOnClick={false}
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>
		</>
	);
}
