import './Content.css';
import recordImg from '../../images/icon-detailed-records.svg'
import brandImg from '../../images/icon-brand-recognition.svg'
import customImg from '../../images/icon-fully-customizable.svg'
import Urls from '../Urls/Urls'
function Content(props) {
  return (
    <div className="content">
      <Urls urls={props.urls}/>
      <div className='content-container__heading'>
        <h2 className='content-container__title'>Advanced Statistics</h2>
        <p className='content-container__description'>Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
         
      </div>
      <div className='content-container__diagram'>
        <img className='content-container__img' alt='Brand' src={brandImg}/>
        <div className='content-container__box'>
          <h4 className='content-container__box-title'>Brand Recognition</h4>
          <p className='content-container__box-description'>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
        </div>
        <img className='content-container__img' alt='Record' src={recordImg}/>
        <div className='content-container__box'>
          <h4 className='content-container__box-title'>Detailed Records</h4>
          <p className='content-container__box-description'>Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
        </div>
        <img className='content-container__img' alt='Custom' src={customImg}/>
        <div className='content-container__box'>
          <h4 className='content-container__box-title'>Fully Customizable</h4>
          <p className='content-container__box-description'>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
