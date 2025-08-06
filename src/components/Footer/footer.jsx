import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">Developed by Desmond Tate © 2025</p>
      <nav className="footer__nav">
        <a className="footer__link" href="https://github.com/">
          Github
        </a>
        <a className="footer__link" href="https://www.figma.com/">
          Figma
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
