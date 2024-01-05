import React, {useRef} from 'react';
import './App.css';
import { Canvas, useFrame, MeshProps, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei'

const Box = (props: MeshProps) => {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame((_, delta) => {
    if( !ref.current) return
    ref.current.rotation.x += 1 * delta
    ref.current.rotation.y += 0.5 * delta
  })

  return (
    <mesh {...props} ref={ref}>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  )
}

const Rig = () => {
  const {camera} = useThree()
  return useFrame(() => {
    camera.position.lerp(new THREE.Vector3(0, 3, 10), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

const App = () => {
  return (
    <div style={{ width: "100vw", height: "75vh" }}>
      <Canvas camera={{ position: [0, 3, 5] }}>
        <PerspectiveCamera makeDefault position={[0, -100, 10]}/>
        <Box position={[1, 1, 1]} name="A" />
        <Environment preset="forest" background />
        <OrbitControls />
        <axesHelper args={[5]} />
        <gridHelper />
        <Rig />
      </Canvas>
    </div>
  );
}

export default App;
