import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/step1");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Smart Building Sensors</Text>
        <Text>Get started with our onboarding flow to set up your building sensors.</Text>
        <Button colorScheme="teal" onClick={handleStart}>Get Started</Button>
      </VStack>
    </Container>
  );
};

export default Index;