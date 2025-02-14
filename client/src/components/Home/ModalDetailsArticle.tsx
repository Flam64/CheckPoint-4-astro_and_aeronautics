import { type MouseEventHandler, useEffect, useState } from "react";
import { toast } from "react-toastify";

import type { ArticleType } from "../../lib/definitions";
//import "./article.css";
//import "../../App.css";

export default function ModaleDetailsArticle({
  onClose,
  articleId,
}: {
  onClose: MouseEventHandler;
  articleId: number;
}) {
  const [readArticle, setReadArticle] = useState<ArticleType[]>();
  const id = articleId;

  // loading stations from database
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/article/${id}`)
      .then((response) => response.json())
      .then((data: ArticleType[]) => {
        if (data !== null) {
          setReadArticle(data);
          console.info("Article", data);
        } else {
          toast.warning(
            "Oups ! Impossible d'afficher les stations de recharge...",
          );
        }
      })
      .catch((error) => toast.error("Oups ! Une erreur s'est produite", error));
  }, [id]);

  return (
    <div className="modalDetails">
      <div className="modalContent">
        <div>
          <img src={`uploads/${readArticle?.[0].picture}`} alt="" />
        </div>
        <div>
          <h1>{readArticle?.[0].title}</h1>
        </div>
        <div>
          <h3>{readArticle?.[0].content}</h3>
        </div>
      </div>
      <hr />
      <div className="closeBouton">
        <button type="button" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  );
}
