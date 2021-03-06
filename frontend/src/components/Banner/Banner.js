import './Banner.css';
import bannerImg from '../../images/illustration-working.svg'
function Banner() {
  return (
    <div className="banner">
      <div className='banner-container__left'>
        <h1 className="banner-container__heading">
          More than just shorter links
        </h1>
        <p className="banner-container__subheading">

          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </p>
        <div className="banner-container__button">
        Get Started
        </div>
      </div>
      <div className='banner-container__right'>
      <img className='banner-container__image' src={bannerImg} alt=""/>
      </div>
    </div>
  );
}

export default Banner;
