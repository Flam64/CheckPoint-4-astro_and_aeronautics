import Articles from "../components/Home/Articles";

export default function HomePage() {
  return (
    <div className="mainPage">
      <div className="sideLeft">
        <h3>side left</h3>
      </div>

      <div className="sideCenter">
        <h1>Hello HomePage</h1>
        <Articles />
      </div>
      <div className="sideRight">
        <h2>Liens utiles</h2>
      </div>
    </div>
  );
}
