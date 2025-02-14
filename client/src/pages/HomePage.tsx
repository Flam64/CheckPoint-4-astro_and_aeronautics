import Articles from "../components/Home/Articles";

export default function HomePage() {
  return (
    <div className="mainPage">
      <div className="sideLeft" />

      <div className="sideCenter">
        <h1>A la une</h1>
        <Articles />
      </div>
      <div className="sideRight">
        <h2>Liens utiles</h2>
      </div>
    </div>
  );
}
