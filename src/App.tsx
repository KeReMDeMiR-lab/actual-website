import { ReactLenis, useLenis } from 'lenis/react'
import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Canvas } from '@react-three/fiber'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Side from './components/SideIcons'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Scene from './components/three/Scene'

gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  const size = 40

  useLenis(() => {
    ScrollTrigger.update()
  })

  useGSAP(() => {
    const mouseMove = (e: MouseEvent): void => {
      gsap.to(".cursor", { x: e.clientX - size / 2, y: e.clientY - size / 2, ease: 'back' })
    }
    window.addEventListener('mousemove', mouseMove)
  })

  return (
    <>
      <ReactLenis root />
      <div className="cursor"></div>

      {/* 3D Canvas layer */}
      <div className="canvas-container">
        <Canvas camera={{ fov: 75, position: [0, 0, 20] }} gl={{ antialias: true }}>
          <Scene scrollContainerId="scroll-container" />
        </Canvas>
      </div>

      {/* HTML overlay */}
      <div className="html-overlay" id="scroll-container">
        <Navbar />
        <Hero />
        <Side />
        <Projects />
        <Skills />
        <div className="section-slot"></div>
        <div className="section-slot"></div>
        <div className="section-slot"></div>
      </div>
    </>
  )
}

export default App
