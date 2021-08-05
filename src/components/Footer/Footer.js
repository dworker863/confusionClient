import {
  faEnvelope,
  faEnvelopeOpen,
  faFax,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/aboutus">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <FontAwesomeIcon icon={faPhone} /> +852 1234 5678
              <br />
              <FontAwesomeIcon icon={faFax} /> +852 8765 4321
              <br />
              <FontAwesomeIcon icon={faEnvelope} />{' '}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
              <br />
            </address>
          </div>
          <div className="col-3 offset-1">
            <a
              className="btn btn-social-icon btn-google"
              href="http://google.com/+"
            >
              <FontAwesomeIcon icon={['fab', 'google-plus-g']} />
            </a>
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/profile.php?id="
            >
              <FontAwesomeIcon icon={['fab', 'facebook']} />
            </a>
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a
              className="btn btn-social-icon btn-linkedin"
              href="http://www.linkedin.com/in/"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <FontAwesomeIcon icon={['fab', 'youtube']} />
            </a>
            <a className="btn btn-social-icon" href="mailto:">
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

library.add(fab);

export default Footer;
