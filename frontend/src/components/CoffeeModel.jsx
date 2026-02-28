import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Cup(){
  return(
    <mesh>
      <cylinderGeometry args={[1,1,2,32]}/>
      <meshStandardMaterial color="#6b3e26"/>
    </mesh>
  )
}

export default function CoffeeModel(){
  return(
    <Canvas>
      <ambientLight intensity={1.5}/>
      <directionalLight position={[2,2,2]}/>
      <Float speed={2} rotationIntensity={2}>
        <Cup/>
      </Float>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
  )
}