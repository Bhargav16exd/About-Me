import NetworkCanvas from './components/NetworkCanvas'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NetworkCanvas />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <Metrics />
          <Experience />
          <Projects />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
