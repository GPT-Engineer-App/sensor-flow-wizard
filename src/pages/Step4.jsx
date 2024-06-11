import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
  const navigate = useNavigate();

  const handleFinish = () => {
    navigate("/");
  };

  const calculatePrice = () => {
    // Placeholder calculation logic
    return 1000;
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Estimated Price</Text>
        <Text>The estimated price for the sensors is: ${calculatePrice()}</Text>
        <Button colorScheme="teal" onClick={handleFinish}>Finish</Button>
      </VStack>
    </Box>
  );
};

export default Step4;