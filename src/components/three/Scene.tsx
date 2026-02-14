import Room from './Room'
import Lighting from './Lighting'
import ScrollCamera from './ScrollCamera'

interface SceneProps {
  scrollContainerId?: string
}

export default function Scene({ scrollContainerId }: SceneProps) {
  return (
    <>
      <Room />
      <Lighting />
      <ScrollCamera scrollContainerId={scrollContainerId} />
    </>
  )
}
