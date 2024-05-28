import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  function handleSetMenu() {
    setMenu((menu) => !menu);
  }

  return (
    <nav className="nav">
      <div className="logo">
        <figure className="figure">T</figure>
        <h3>Trafalgar</h3>
      </div>

      <ul
        className={`nav__list ${menu ? "show__menu" : ""}`}
        style={menu ? { transition: "all 1s" } : {}}
      >
        <li>
          <a href="#!">Home</a>
        </li>
        <li>
          <a href="#!">Find a doctor</a>
        </li>
        <li>
          <a href="#!">Apps</a>
        </li>
        <li>
          <a href="#!">Testimonials</a>
        </li>
        <li>
          <a href="#!">About us</a>
        </li>
      </ul>

      <div
        className="nav__menu"
        onClick={handleSetMenu}
        style={menu ? { position: "fixed", right: "3rem" } : {}}
      >
        <img
          src={menu ? "images/close.svg" : "images/open.png"}
          alt="menu icon"
        />
      </div>

      {menu && <div className="nav__overlay" onClick={handleSetMenu}></div>}
    </nav>
  );
}
