import { useForm } from "react-hook-form";
import "./admin.css";
import { toast } from "react-toastify";
import type { PublicationType } from "../../lib/definitions";

export default function NewPublication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PublicationType>();

  const onSubmit = (data: PublicationType) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/article/new`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        data,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Valeur de data", data);
        if (data === 201) {
          toast.success("Votre reservation et enregistré ");
        } else {
          toast.warning("Oups ! Impossible d'enregistrer votre réservation...");
        }
      })
      .catch((error) => toast.error("Oups ! Une erreur s'est produite", error));
  };

  return (
    <>
      <div className="newPublication">
        <h2>Nouvelle publication</h2>
        <section className="formArticle">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* picture */}
            <label htmlFor="text">Image :</label>
            <br />
            <input
              size={81}
              {...register("picture", {
                required: "Le lien de l'image est requis",
              })}
              placeholder="Image de la publication"
            />
            {errors.picture && <p>{errors.picture.message}</p>}

            <br />

            {/* category */}
            <label htmlFor="text">Catégorie :</label>
            <br />
            <input
              size={81}
              {...register("category", {
                required: "La catégorie est requise",
              })}
              placeholder="Choisir une catégorie"
            />
            {errors.category && <p>{errors.category.message}</p>}
            <br />

            {/* title*/}
            <label htmlFor="text">Titre :</label>
            <br />
            <input
              size={81}
              {...register("title", { required: "Le titre est requis" })}
              placeholder="Titre de la publication"
            />
            {errors.title && <p>{errors.title.message}</p>}
            <br />

            {/* content */}
            <label htmlFor="text">Corps de l'article :</label>
            <textarea
              cols={78}
              rows={12}
              {...register("content", { required: "Le contenu est requis" })}
              placeholder="Contenu de la publication"
            />
            {errors.content && <p>{errors.content.message}</p>}

            <br />
            <button type="submit">Publier</button>
          </form>
        </section>
      </div>
    </>
  );
}
