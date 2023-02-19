import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ARButton, Controllers, Hands, XR as Xr } from '@react-three/xr'
import { useRef } from 'react'

const Cube = () => {
  const ref = useRef()
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
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
        {/* <Stars /> */}
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Xr>
          <Controllers />
          {/* <Hands /> */}
          {/* <Cube /> */}
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color='blue' />
          </mesh>
        </Xr>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
