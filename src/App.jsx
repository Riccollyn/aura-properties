import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Location from './components/Location.jsx'
import Residences from './components/Residences.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Residences />
        <Gallery />
        <Location />
      </main>
    </>
  )
}

export default App
