import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Drinks from './components/Drinks/Drinks'
import History from './components/History/History'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Drinks />
        <History />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
