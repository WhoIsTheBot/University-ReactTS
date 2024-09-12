import Instagram from '../../assets/photo/icon/instagram.png';
import Twitter from '../../assets/photo/icon/twitter.png';
import Facebook from '../../assets/photo/icon/facebook.png';

function Footer() {
  return (
    <footer>
      <div className="footer-wraper">
        <div className="social-media">
          <h2>Social Media</h2>
          <ul>
            <li>
              <img src={Instagram} alt="instagram" />
            </li>
            <li>
              <img src={Facebook} alt="facebook" />
            </li>
            <li>
              <img src={Twitter} alt="twitter" />
            </li>
          </ul>
        </div>
        <ul className="contact-us">
          <li>
            <h3>Number phone:</h3>
            <p>380 50 2567451</p>
          </li>
          <li>
            <h3>Email:</h3>
            <p>korporeit@gmail.com</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
