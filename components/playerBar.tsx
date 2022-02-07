import { Box, Flex, Text } from "@chakra-ui/react";
import { useStoreState } from "easy-peasy";
import Player from "./player";

const PlayerBar = () => {
  const songs = useStoreState((state: any) => state.activeSongs);
  const activeSong = useStoreState((state: any) => state.activeSong);

  return (
    <Box height="100px" w="100vw" bg="gray.900" p="10px">
      <Flex align="center" justify="center">
        {activeSong && (
          <Box padding="20px" color="white" w="30%">
            <Text fontSize="large">{activeSong.name}</Text>
            <Text fontSize="sm">{activeSong.artist.name}</Text>
          </Box>
        )}
        <Box w="40%">
          {activeSong && <Player songs={songs} activeSong={activeSong} />}
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
