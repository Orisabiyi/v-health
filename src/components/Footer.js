export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <div className="logo">
          <figure className="figure">T</figure>
          <h3>Trafalgar</h3>
        </div>

        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>

        <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
      </div>

      <div className="footer__info">
        <h4>Company</h4>

        <ul className="footer__list">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li>
            <a href="/">Find a doctor</a>
          </li>
          <li>
            <a href="/">Apps</a>
          </li>
        </ul>
      </div>

      <div className="footer__info">
        <h4>Region</h4>

        <ul className="footer__list">
          <li>
            <a href="/">Indonesia</a>
          </li>
          <li>
            <a href="/">Singapore</a>
          </li>
          <li>
            <a href="/">Hongkong</a>
          </li>
          <li>
            <a href="/">Canada</a>
          </li>
        </ul>
      </div>

      <div className="footer__info">
        <h4>Help</h4>

        <ul className="footer__list">
          <li>
            <a href="/">Help center</a>
          </li>
          <li>
            <a href="/">Contact support</a>
          </li>
          <li>
            <a href="/">Instructions</a>
          </li>
          <li>
            <a href="/">How it works</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
