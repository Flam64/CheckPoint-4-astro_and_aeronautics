import axios from "axios";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      console.info("je sis la");
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        data,
        // Ajout des credentials ici
        {
          withCredentials: true,
        },
      );
      toast.success(response.data.message);
      console.info("response", response);

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (e) {
      console.info(e);
      toast.error("Une erreur est survenue.");
    }
  };

  return (
    <section className="">
      <div className="">
        <h2 className="">Login</h2>

        <form className="" onSubmit={handleSubmit(formSubmit)}>
          <div>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              id="email"
              type="email"
              className=""
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
              // biome-ignore lint/a11y/useSemanticElements: <explanation>
              <p role="alert" className="">
                {errors.email.message as ReactNode}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="pwd" className="">
              Password
            </label>
            <input
              id="pwd"
              type="password"
              className=""
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
              // biome-ignore lint/a11y/useSemanticElements: <explanation>
              <p role="alert" className="">
                {errors.password.message as ReactNode}
              </p>
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
