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
    <mesh ref={ref} position={[0, 3, -3]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach='material' color='orange' />
    </mesh>
  )
}

const Reticle = () => {
  const refReticle = useRef()

  useHitTest((hit, hitM) => {
    // use hitMatrix to position any object on the real life surface
    hit.decompose(refReticle.current.position, refReticle.current.rotation, refReticle.current.scale)
  })

  return (
    <mesh ref={refReticle} rotation={[-Math.PI / 2, 0, 0]} matrixAutoUpdate={true} visible={true}>
      <ringGeometry args={[0.15, 0.2, 32]} />
      <meshStandardMaterial attach='material' color='lightgray' />
    </mesh>
  )
}

function App () {
  return (
    <>
      <ARButton />
      <Canvas>
        <Xr referenceSpace='local'>
          <Interactive>
            <ambientLight />
            <directionalLight position={[-1, 2, 3]} />
            {/* <Cube /> */}
            <Reticle />
            <Controllers />
          </Interactive>
          <OrbitControls />
        </Xr>
      </Canvas>
    </>
  )
}

export default App
