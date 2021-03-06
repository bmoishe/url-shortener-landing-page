import './Url.css';
import { useState } from 'react'

function Url(props) {
  const [isCopied, setIsCopied ] = useState(false)
  // const shortenUrl = () => {
   
  // }

  function copyToClip() {
    console.log('The link was clicked.');
    // console.log('test shortLink',shortLink)
    setIsCopied(true)
    // document.execCommand(shortLink)
  }

  const copied = isCopied && 'copied'
  const btnText = isCopied ? 'Copied!' : 'Copy'
  const shortLink = props.url.short_link
  const originalLink = props.url.original_link
  const button = <div className={`url__button ${copied}`} onClick={() =>
copyToClip('test')}>{btnText}</div>
  return (
    <div className="url">
      <div className="url-left">{originalLink}</div>
    <div className="url-right">
      <div className="url-shortened"href={shortLink}>{shortLink}</div>
      {button}
    </div>
    </div>
  );
}

export default Url;
