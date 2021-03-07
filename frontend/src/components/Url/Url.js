import './Url.css';
import { useState } from 'react'

function Url(props) {
  const [isCopied, setIsCopied ] = useState(false)
  const copied = isCopied && 'copied'
  const btnText = isCopied ? 'Copied!' : 'Copy'
  const shortLink = props.url.short_link
  const originalLink = props.url.original_link
  const copyToClip = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setIsCopied(true);
  };
  const button = <div className={`url__button ${copied}`} onClick={() => copyToClip(shortLink) }>{btnText}</div>
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
