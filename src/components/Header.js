import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <Nav />

      <div className="header__content">
        <h1>Virtual healthcare for you</h1>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <button className="btn">Consult today</button>
      </div>

      <div className="header__img">
        <img
          src="images/header-illustration.png"
          alt="illustration of people relating with product"
        />
      </div>
    </header>
  );
}
