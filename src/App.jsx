import About from './components/About.jsx'
import Gallery from './components/Gallery.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
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
      </main>
    </>
  )
}

export default App
