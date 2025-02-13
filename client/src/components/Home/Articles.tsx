//import Article from "./articles.json";
import { toast } from "react-toastify";
import "./article.css";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ArticleType } from "../../lib/definitions";
import ModalDetailsArticle from "./ModalDetailsArticle";

// faire un fetch
export default function Articles() {
  //const listNews: ArticleType[] = Article;

  const [article, setArticle] = useState<ArticleType[]>([]);
  const [showModaleArticle, setShowModalArticle] = useState(false);
  const [articleToRead, setArticleToRead] = useState(0);

  const handleElementClick = (e: number) => {
    setArticleToRead(e);
    setShowModalArticle(true);
  };

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
        <section className="sectionCard">
          {article?.map((n: ArticleType) => (
            <article className="articleCard" key={n.id}>
              <figure className="imageCard">
                <img src={n.picture} alt="" />
              </figure>
              <div className="titlecard">
                <h1>{n.title}</h1>
              </div>
              <div className="descriptionCard">
                <h2>{n.content}</h2>
                <button type="button" onClick={() => handleElementClick(n.id)}>
                  Consulter l'article
                </button>
              </div>
            </article>
          ))}
          {/*display station information after clicking on article */}
          {showModaleArticle &&
            createPortal(
              <ModalDetailsArticle
                onClose={() => setShowModalArticle(false)}
                articleId={articleToRead}
              />,
              document.body,
            )}
        </section>
      </div>
    </>
  );
}
