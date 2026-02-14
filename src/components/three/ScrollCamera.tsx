import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { ScrollTrigger } from 'gsap/all'
import * as THREE from 'three'

interface ScrollCameraProps {
  startZ?: number
  endZ?: number
  scrollContainerId?: string
}

export default function ScrollCamera({
  startZ = 20,
  endZ = -20,
  scrollContainerId = 'scroll-container',
}: ScrollCameraProps) {
  const progressRef = useRef(0)
  const { camera } = useThree()

  useEffect(() => {
    const el = document.getElementById(scrollContainerId)
    if (!el) return

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        progressRef.current = self.progress
      },
    })

    return () => {
      trigger.kill()
    }
  }, [scrollContainerId])

  useFrame(() => {
    const targetZ = THREE.MathUtils.lerp(startZ, endZ, progressRef.current)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.1)
  })

  return null
}
