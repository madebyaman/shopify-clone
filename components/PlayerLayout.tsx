import { Box } from "@chakra-ui/react";
import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" h="100vh">
      <Box top={0} w="250px" left="0" position="absolute">
        <Sidebar />
      </Box>
      <Box ml="250px" mb="100px">
        {children}
      </Box>
      <Box pos="absolute" left="0" bottom="0">
        player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
