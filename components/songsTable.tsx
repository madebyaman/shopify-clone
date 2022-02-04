import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  Box,
  IconButton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const SongTable = ({ songs }) => {
  return (
    <Box bg="transparent" color="white">
      <Box padding="10px" mb="20px">
        <IconButton
          icon={<BsFillPlayFill fontSize="30px" />}
          colorScheme="green"
          isRound
          size="lg"
          aria-label="Play"
        />
        <Table variant="unstyled" mt="5">
          <Thead
            borderBottom="1px solid"
            borderColor="rgba(255, 255, 255, 0.2)"
          >
            <Tr>
              <Th>#</Th>
              <Th>Title</Th>
              <Th>Date Addedd</Th>
              <Th>
                <AiOutlineClockCircle />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {songs.map((song, i) => (
              <Tr
                key={song.id}
                sx={{
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    bg: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                cursor="pointer"
              >
                <Td>{i + 1}</Td>
                <Td>{song.name}</Td>
                <Td>{song.createdAt.toString()}</Td>
                <Td>{song.duration}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default SongTable;
