import React, { useRef, useState }  from 'react';
import './App.css';
import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements  } from '@react-three/fiber'

const Box = (props: ThreeElements['mesh']) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active) }
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        < meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const App = () => {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
