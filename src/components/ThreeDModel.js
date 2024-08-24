// src/components/ThreeDModel.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

const ThreeDModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1} />;
};

export default ThreeDModel;
