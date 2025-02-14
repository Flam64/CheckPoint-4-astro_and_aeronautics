//import Article from "./articles.json";
import { toast } from "react-toastify";
import "./article.css";
import { useEffect, useState } from "react";
import type { ArticleType } from "../../lib/definitions";

export default function Articles() {
  const [article, setArticle] = useState<ArticleType[]>([]);
  const MAX_CHAR_TITLE = 80;
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/article`)
      .then((Response) => Response.json())
      .then((data) => {
        setArticle(data);
      })
      .catch((error) =>
        toast.error("Erreur pour récupérer les articles..", error),
      );
  }, []);

  return (
    <>
      <div>
        <section className="sectionPopulaire">
          {article?.map((n: ArticleType) => (
            <p className="titlePopulaire" key={n.id}>
              <div className="describPopulaire">
                <h2>
                  {n.title.length > MAX_CHAR_TITLE
                    ? `▪️ ${n.title.substring(0, MAX_CHAR_TITLE)}`
                    : `▪️ ${n.title}`}
                </h2>
              </div>
            </p>
          ))}
        </section>
      </div>
    </>
  );
}
