import { ReactLenis, useLenis } from 'lenis/react'
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Side from './components/SideIcons'
import Projects from './components/Projects'
import Skills from './components/Skills'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  const size = 40
  // const lenis = useLenis(() => {
  // })
  useGSAP(()=> {
    const mouseMove = (e:MouseEvent):void => {
      gsap.to(".cursor", {x: e.clientX - size/2, y: e.clientY - size/2, ease:'back'})
  }
  window.addEventListener('mousemove', mouseMove)
  })

  return (
    <>
      <ReactLenis root />
      <div className="cursor"></div>
      <Navbar/>
      <Hero/>
      <Side/>
      <Projects/>
      <Skills />
      <div>brevv</div>
      <div>brevv</div>
      <div>brevv</div>
      <div>brevv</div>
      <div>brevv</div>
      <div>brevv</div>
      <div>brevv</div>
    </>
  )
}

export default App
