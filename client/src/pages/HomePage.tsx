import Articles from "../components/Home/Articles";
import ArticlesPopulaires from "../components/Home/ArticlesPopulaires";

export default function HomePage() {
  return (
    <div className="mainPage">
      <div className="sideLeft" />

      <div className="sideCenter">
        <h1>A la une</h1>
        <Articles />
      </div>
      <div className="sideRight">
        <h2 className="populaires">Articles populaires</h2>
        <ArticlesPopulaires />
      </div>
    </div>
  );
}
