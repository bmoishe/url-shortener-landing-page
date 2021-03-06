import './Urls.css';
import Url from '../Url/Url'

function Urls(props) {
  function renderUrls() {
    return props.urls.map((url, index) => {
      if(url !==undefined ) {
        if(url.short_link !==null ||url.original_link !==null) {
          return(
            <Url key={index} url={url}/>
            )
        }
        return ''
      }
      return ''
    })
  }

  return (
    <div className="urls">
     {renderUrls()}
    </div>
  );
}

export default Urls;
