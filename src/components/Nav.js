import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">
        <figure className="figure">T</figure>
        <h3>Trafalgar</h3>
      </div>

      <ul className="nav__list">
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

      <div className="nav__menu" onClick={() => setMenu((menu) => !menu)}>
        <img
          src={menu ? "images/close.svg" : "images/open.png"}
          alt="menu icon"
        />
      </div>
    </nav>
  );
}
