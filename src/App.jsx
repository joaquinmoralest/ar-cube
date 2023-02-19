import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ARButton, Controllers, Interactive, XR as Xr } from '@react-three/xr'
import { useRef } from 'react'

const Cube = () => {
  const ref = useRef()
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
            <Controllers />
            <Cube />
            <OrbitControls />
          </Interactive>
        </Xr>
      </Canvas>
    </>
  )
}

export default App
