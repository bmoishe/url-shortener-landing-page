import './Banner.css';
import bannerImg from '../../images/illustration-working.svg'
function Banner() {
  return (
    <div className="banner">
      <div className='banner-container__right'>
        <div className="banner-container__heading">
          More than just shorter links
        </div>
        <div className="banner-container__subheading">

          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </div>
        <div className="banner-container__button">
        Get Started
        </div>
      </div>
      <div className='banner-container__left'>
      <img src={bannerImg} alt=""/>
      </div>
    </div>
  );
}

export default Banner;
