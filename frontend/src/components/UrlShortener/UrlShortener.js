import './UrlShortener.css';
import { useState } from 'react'
function UrlShortener(props) {
  const urls = props.urls
  const [newUrl, setNewUrl] = useState("");
  const [contentLoaded, setIsContentLoaded] = useState(true)
  const btnText = contentLoaded ? 'Shorten it!' : 'Loading'
  const loadingStyle = !contentLoaded && 'loading'
  const shortenUrl = () => {
    if(newUrl&& contentLoaded) {
      setIsContentLoaded(false);
      console.log('sending request')
      fetch(`https://api.shrtco.de/v2/shorten?url=${newUrl}`)
        .then(res => res.json())
        .then(
          (data) => {
            urls.unshift(data.result)
            props.setUrls(urls);
            props.setIsLoaded(true);
            setIsContentLoaded(true);
          },
            (error) => {
              props.setIsLoaded(true);
              setIsContentLoaded(true);
              props.setError(error);
            }
          )
          props.setIsLoaded(false);
          setIsContentLoaded(false);
    }
  }

  return (
    <div className="url-shortener-background">

    <div className="url-shortener">
      <div className='url-shortener-container__right'>
        <input className='url-shortener-container__input' type="text" name="" id="" placeholder='Shorten a link here...' onChange={e =>setNewUrl(e.target.value)}/>
      </div>
      <div className='url-shortener-container__left'>
        <div onClick={shortenUrl} className={`url-shortener-container__button ${loadingStyle}`}>{btnText}</div>
    </div>
    </div>
    </div>
  );
}

export default UrlShortener;
