import React, { useRef, useState }  from 'react';
import './App.css';
import * as THREE from 'three'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Text } from '@react-three/drei';

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

const Text1 = (props: { font?: string, fontSize?: number}) => {
  const texsRef = useRef({} as any)
  useFrame(() => {
    texsRef.current.rotation.x += 0.01
  });

  return (
    <group ref={texsRef} position={[-2, 1, 0]} >
        <Text font={props.font} fontSize={props.fontSize} color={'#ff0203'}>HELLO</Text>
    </group>
  )
}

const Text2 = (props: { font?: string, fontSize?: number}) => {
  const texsRef = useRef({} as any)
  useFrame(() => {
    texsRef.current.rotation.x += 0.01
  });

  return (
    <group ref={texsRef} position={[1, 0, 2]} >
        <Text font={props.font} fontSize={props.fontSize} color={'#03ffff'}>WORLD</Text>
    </group>
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
        <Text1 font="/Roboto-Black.ttf" fontSize={1} />
        <Text2 font="/Roboto-Black.ttf" fontSize={1}/>
      </Canvas>
    </div>
  );
}

export default App;
