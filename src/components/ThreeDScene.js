import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDModel from './ThreeDModel';

const ThreeDScene = ({ color, isVisible }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {isVisible && <ThreeDModel modelPath="model2.gltf" />}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeDScene;
