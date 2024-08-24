import React, { useState, useEffect } from 'react';
import LocationProvider from './components/LocationProvider';
import ThreeDScene from './components/ThreeDScene';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [color, setColor] = useState('orange');
  const [isVisible, setIsVisible] = useState(false);

  const predefinedLocations = [
    { name: 'Location A', latitude: 7.408441, longitude: 80.610129, color: 'red' },
    { name: 'Location B', latitude: 34.0522, longitude: -118.2437, color: 'blue' },
  ];

  useEffect(() => {
    predefinedLocations.forEach((loc) => {
      if (location.latitude && location.longitude) {
        const distance = Math.sqrt(
          Math.pow(location.latitude - loc.latitude, 2) +
          Math.pow(location.longitude - loc.longitude, 2)
        );
        if (distance < 0.05) {  // Adjust the radius as needed
          setColor(loc.color);
          setIsVisible(true);
          toast.info(`You are near ${loc.name}!`);
        } else {
          setIsVisible(false);
        }
      }
    });
  }, [location, predefinedLocations]); // Added predefinedLocations as a dependency

  const handleLocationChange = (userLocation) => {
    setLocation(userLocation);
  };

  return (
    <div>
      <ToastContainer />
      <LocationProvider onLocationChange={handleLocationChange} />
      <ThreeDScene color={color} isVisible={isVisible} />
    </div>
  );
};

export default App;
