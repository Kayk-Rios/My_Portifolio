
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-content">
        <h2 className="footer-name">Kayk Dario</h2>

        
        <div className="footer-socials">
          <a href="https://github.com/Kayk-Rios" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/kayk-dario/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:menosum48@gmail.com">E-mail</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Kayk Dario • Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
