import axios from "axios";
import { type ReactNode, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const passwordRef = useRef({});
  passwordRef.current = watch("password", "");

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const formSubmit = async (data: any) => {
    const { confirmpassword, ...rest } = data;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/register`,
        rest,
      );
      toast.success(response.data.message);
    } catch (e) {
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <section className="pageRegister">
      <div className="">
        <h2 className="title">Créer un utilisateur</h2>

        <form className="registerForm" onSubmit={handleSubmit(formSubmit)}>
          <div>
            <label htmlFor="prenom" className="">
              Prénom
            </label>
            <br />
            <input
              size={40}
              type="text"
              className="firstname"
              placeholder="your firstname"
              {...register("firstname", {
                required: "Le prénom est obligatoire",
                minLength: {
                  value: 2,
                  message: "Le prénom doit contenir au minimum 2 caractères",
                },
              })}
            />
            {errors.firstname && (
              <p className="">{errors.firstname?.message as ReactNode}</p>
            )}
          </div>
          <div>
            <label htmlFor="nom" className="">
              Nom
            </label>
            <br />
            <input
              size={40}
              type="text"
              className="name"
              placeholder="your last name"
              {...register("lastname", {
                required: "Le nom est obligatoire",
                minLength: {
                  value: 2,
                  message: "Le nom doit contenir au minimum 2 caractères",
                },
              })}
            />
            {errors.lastname && (
              <p className="">{errors.lastname?.message as ReactNode}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="">
              Email
            </label>
            <br />
            <input
              size={40}
              type="email"
              className="email"
              placeholder="your_name@exemple.fr"
              {...register("email", {
                required: "L'email est obligatoire",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: "L'email n'est pas valide",
                },
              })}
            />
            {errors.email?.message && (
              <p className="">{errors.email.message as ReactNode}</p>
            )}
          </div>

          <div>
            <label htmlFor="mdp" className="">
              Mot de passe
            </label>
            <br />
            <input
              size={40}
              type="password"
              className="pwd"
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

            {errors.password && (
              <p className="">{errors.password.message as ReactNode}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmpwd" className="">
              Confirmer le mot de passe
            </label>
            <br />
            <input
              size={40}
              type="password"
              className="pwd"
              placeholder="••••••••"
              {...register("confirmpassword", {
                required: "La confirmation du mot de passe est obligatoire",
                validate: (value) =>
                  value === passwordRef.current ||
                  "Les mots de passe ne correspondent pas",
              })}
            />
            {errors.confirmpassword && (
              <p className="">{errors.confirmpassword.message as ReactNode}</p>
            )}
          </div>

          <button className="" type={"submit"}>
            Créer
          </button>
        </form>
      </div>
    </section>
  );
}
