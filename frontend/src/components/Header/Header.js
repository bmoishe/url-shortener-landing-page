import './Header.css';
import Logo from '../../images/logo.svg'
function Header() {
  return (
    <div className="header">
      <div className='header-container__right'>
        <img src={Logo} alt='logo'></img>
        <div className='header-container__options'>
          <div className='header-container__options-option'>Features</div>
          <div className='header-container__options-option'>Pricing</div>
          <div className='header-container__options-option'>Resources</div>
        </div>
      </div>
      <div className='header-container__left'>
        <div className='header-container__login'>Login</div>
        <div className='header-container__sign-up'>Sign Up</div>
      </div>
    </div>
  );
}

export default Header;
