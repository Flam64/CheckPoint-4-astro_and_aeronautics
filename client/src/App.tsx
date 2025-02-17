import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/Home/Footer";
import NavBar from "./components/Home/NavBar";
import "../src/App.css";

export default function App() {
  // Use a state: if the state is true, the modale is open then its false the modale is close

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>

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
