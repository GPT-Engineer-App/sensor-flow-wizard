import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";

const LocationMarker = ({ setPosition }) => {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return null;
};

const Step2 = () => {
  const navigate = useNavigate();
  const [position, setPosition] = useState(null);

  const handleNext = () => {
    navigate("/step3");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Input placeholder="Enter address" />
        <Box h="400px" w="100%">
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {position && <Marker position={position}></Marker>}
            <LocationMarker setPosition={setPosition} />
          </MapContainer>
        </Box>
        <Button colorScheme="teal" onClick={handleNext}>Next</Button>
      </VStack>
    </Box>
  );
};

export default Step2;