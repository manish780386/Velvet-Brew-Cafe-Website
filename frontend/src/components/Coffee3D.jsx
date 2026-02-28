import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Cup(){
  return (
    <mesh rotation={[0.3,0.5,0]}>
      <cylinderGeometry args={[1,1,2,32]} />
      <meshStandardMaterial color="#6b3e26" />
    </mesh>
  );
}

export default function Coffee3D(){
  return(
    <Canvas style={{height:"200px"}}>
      <ambientLight intensity={1.5}/>
      <directionalLight position={[2,2,2]}/>
      <Float speed={3} rotationIntensity={2}>
        <Cup/>
      </Float>
    </Canvas>
  )
}