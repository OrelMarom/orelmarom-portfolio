import Header from '../components/Header'
import Hero from '../components/Hero'
import Project1 from '../components/Project1'
import Project2 from '../components/Project2'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div className="bg-white text-black w-full min-w-[360px]">
      <Header />
      <Hero />
      <div className="w-[80%] mx-auto">
        <Project1 />
        <Project2 />
      </div>
      <Footer />
    </div>
  )
}

export default HomePage