import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
import Drinks from './components/Drinks/Drinks'
import History from './components/History/History'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="min-h-screen ">
      <Nav />
      <main>
        <div className="relative">
          <div
            className="absolute inset-0 bg-[url('/images/photos/leaves-pattern.webp')] bg-no-repeat opacity-60 bg-center bg-cover
           -z-10"
          />
          <Hero />
          <Drinks />
        </div>
        <History />
        <About />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
