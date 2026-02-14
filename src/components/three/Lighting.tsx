export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 5, 0]} intensity={0.8} />
      <pointLight position={[0, 0, 0]} color="#00FF41" intensity={50} decay={1} />
    </>
  )
}
