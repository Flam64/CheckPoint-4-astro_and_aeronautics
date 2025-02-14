import axios from "axios";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "../components/Admin/admin.css";

export default function LoginPage() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const formSubmit = async (data: any) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`,
        data,
        {
          withCredentials: true,
        },
      );
      toast.success(response.data.message);
      console.info("response", response);

      setTimeout(() => {
        navigate("/newpublication");
      }, 1500);
    } catch (e) {
      console.info(e);
      toast.error("Une erreur est survenue.");
    }
  };

  return (
    <section className="pageLogin">
      <div className="">
        <h2 className="title">Login</h2>
        <form className="loginForm" onSubmit={handleSubmit(formSubmit)}>
          <div>
            <label htmlFor="email" className="">
              Email
            </label>{" "}
            <br />
            <input
              id="email"
              type="email"
              size={40}
              className="email"
              placeholder="your@email.com"
              {...register("email", {
                required: "L'email est obligatoire",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "L'email n'est pas valide",
                },
              })}
            />
            {errors.email?.message && (
              <p>{errors.email.message as ReactNode}</p>
            )}
          </div>

          <div>
            <label htmlFor="pwd">Password</label> <br />
            <input
              id="pwd"
              type="password"
              className="pwd"
              size={40}
              placeholder="••••••••"
              {...register("password", {
                required: "Le mot de passe est obligatoire",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
                  message:
                    "Le mot de passe doit contenir entre 8 et 16 caractères, au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial",
                },
              })}
            />
            {errors.password?.message && (
              <p>{errors.password.message as ReactNode}</p>
            )}
          </div>
          <button type={"submit"} className="">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
