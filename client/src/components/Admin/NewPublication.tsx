import { useForm } from "react-hook-form";
import "./admin.css";
import { useState } from "react";
import { toast } from "react-toastify";
import type { PublicationType } from "../../lib/definitions";

export default function NewPublication() {
  const [uploadImage, setUploadImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PublicationType>();

  const handleFileChange = async (event: React.ChangeEvent) => {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    if (target.files?.length) {
      const formData = new FormData();
      formData.append("picture", target.files[0]);

      fetch(`${import.meta.env.VITE_API_URL}/api/article/upload`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => setUploadImage(data.picture))
        .catch((error) =>
          toast.error("Oups ! Une erreur s'est produite", error),
        );
    }
  };

  const onSubmit = async (data: PublicationType) => {
    data.picture = uploadImage;

    fetch(`${import.meta.env.VITE_API_URL}/api/article/new`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        data,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.info("Retour data: ", data);
        if (data === 201) {
          toast.success("Votre publication est enregistrée ");
        } else {
          toast.warning("Oups ! Impossible d'enregistrer votre publicaton...");
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
              type="file"
              size={81}
              {...register("picture", {
                required: "Le lien de l'image est requis",
              })}
              placeholder="Image de la publication"
              onChange={handleFileChange}
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
