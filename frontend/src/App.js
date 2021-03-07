import { useState } from 'react'
import './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import UrlShortener from './components/UrlShortener/UrlShortener'
import Content from './components/Content/Content'
import PromoBanner from './components/PromoBanner/PromoBanner'
import Footer from './components/Footer/Footer'
function App() {
  const [urls, setUrls] = useState(
    [
      {
        original_link:'example.co.uk',
        short_link: 'e.co.uk',
      }
    ]
  )
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  if(error) console.error(error)
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Banner */}
      <Banner/>
      {/* URL shortener */}
      <UrlShortener setUrls={setUrls} setIsLoaded={setIsLoaded} setError={setError} urls={urls} error={error}/>
      {/* Array of urls */}
      {/* Lower section */}
      <Content urls={urls} isLoaded={isLoaded}/>
      {/* Boost your lins today banner */}
      <PromoBanner/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
