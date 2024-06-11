import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Step3 = () => {
  const navigate = useNavigate();
  const [floors, setFloors] = useState(0);
  const [squareMeters, setSquareMeters] = useState(0);

  const handleNext = () => {
    navigate("/step4");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Building Information</Text>
        <Input
          placeholder="Number of floors"
          type="number"
          value={floors}
          onChange={(e) => setFloors(e.target.value)}
        />
        <Input
          placeholder="Square meters per floor"
          type="number"
          value={squareMeters}
          onChange={(e) => setSquareMeters(e.target.value)}
        />
        <Box w="100%" h="200px" bg="gray.100" position="relative">
          {[...Array(Number(floors))].map((_, i) => (
            <Box
              key={i}
              w="100%"
              h={`${200 / floors}px`}
              bg="teal.500"
              position="absolute"
              bottom={`${(200 / floors) * i}px`}
              transition="all 0.3s ease"
            />
          ))}
        </Box>
        <Button colorScheme="teal" onClick={handleNext}>Next</Button>
      </VStack>
    </Box>
  );
};

export default Step3;