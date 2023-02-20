import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ARButton, Controllers, Interactive, useHitTest, XR as Xr } from '@react-three/xr'
import { useRef } from 'react'

const Cube = () => {
  const ref = useRef()

  useHitTest((hit) => {
    // use hitMatrix to position any object on the real life surface
    hit.decompose(ref.current.position, ref.current.rotation, ref.current.scale)
  })

  return (
    <mesh ref={ref} position={[0, 0, -5]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' color='orange' />
    </mesh>
  )
}

function App () {
  return (
    <>
      <ARButton />
      <Canvas>
        <Xr>
          <Interactive>
            <ambientLight />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <Cube />
            <Controllers />
          </Interactive>
          <OrbitControls />
        </Xr>
      </Canvas>
    </>
  )
}

export default App
