
import Banner from "./components/banner/Banner.tsx"
import Contact from "./components/contact/Contact.tsx"
import Features from "./components/features/Features.tsx"
import Footer from "./components/footer/Footer.tsx"
import FooterBottom from "./components/footer/FooterBottom.tsx"
import Navbar from "./components/navbar/Navbar.tsx"
import Projects from "./components/projects/Projects.tsx"
import Resume from "./components/resume/Resume.tsx"


const App = () => {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Features />
          <Projects />
          <Resume />
          <Contact />
          <Footer />
          <FooterBottom />
        </div>
      </div>
    </>
  )
}

export default App
