import './Footer.css';
import Logo from '../../images/logo.svg'
function Footer() {
  return (
    <div className="footer">
      <img className='footer-container__logo' src={Logo} alt="logo"/>
      <div className='footer-container__links-container'>
        <div className='footer-container__links'>
          <div className='footer-container__links-title' >Features</div>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className='footer-container__links'>
          <div className='footer-container__links-title' >Resources</div>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
          </div>
        <div className='footer-container__links'>
          <div className='footer-container__links-title' >Company</div>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
      </div>
      <div className='footer-container__socials'>
        <img src="" alt="facebook"/>
        <img src="" alt="twitter"/>
        <img src="" alt="pintrest"/>
        <img src="" alt="instagram"/>
      </div>
    </div>
  );
}



export default Footer;
