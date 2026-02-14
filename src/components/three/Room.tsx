import { BackSide } from 'three'

export default function Room() {
  return (
    <mesh>
      <boxGeometry args={[10, 6, 50]} />
      <meshStandardMaterial color="#2a2a2a" side={BackSide} />
    </mesh>
  )
}
