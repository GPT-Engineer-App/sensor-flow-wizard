import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/step2");
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Smart Building Sensors Onboarding Flow</Text>
        <Text>This flow will guide you through the process of setting up sensors for your smart building.</Text>
        <Button colorScheme="teal" onClick={handleNext}>Next</Button>
      </VStack>
    </Box>
  );
};

export default Step1;