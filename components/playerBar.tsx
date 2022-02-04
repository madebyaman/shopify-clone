import { Box, Flex, Text } from "@chakra-ui/react";

const PlayerBar = () => {
  return (
    <Box height="100px" w="100vw" bg="gray.900" p="10px">
      <Flex align="center" justify="center">
        <Box padding="20px" color="white" w="30%">
          <Text fontSize="large">Song name</Text>
          <Text fontSize="sm">Artist Name</Text>
        </Box>
        <Box w="40%">Controls</Box>
        <Box w="30%">Song</Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
