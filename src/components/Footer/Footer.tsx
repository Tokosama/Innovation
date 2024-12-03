import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section text-center">
          <h3 className="footer-heading">About</h3>
          <p className="footer-text">
            Nulla quis lorem ut libero malesuada <br />
          feugiat. Praesent sapien massa, convallis <br />
          a pellentesque nec, egestas non nisi. <br />
           Pellentesque in ipsum id orci porta<br />
              dapibus. Sed porttitor lectus nibh.
          </p>
        </div>

        <div className="footer-section text-center">
          <h3 className="footer-heading">SOCIAL</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="social-icon">
              <FontAwesomeIcon icon={faPinterestP} size="lg" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">CONTACT US</h3>
          <p className="footer-text">
          500 Terry Francois St<br />
            CA 94158<br />
            +1-410-555-0134 |<br />
            info@example.com<br />
            contact@example.com<br />
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          <p>&copy;Copyright © 2024 Home Decor | Powered by Home Decor</p>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">About us</a>
          <a href="#" className="footer-link">Living Room</a>
          <a href="#" className="footer-link">Kitchen</a>
          <a href="#" className="footer-link">Outdoors</a>
          <a href="#" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
