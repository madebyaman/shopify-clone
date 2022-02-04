import {
  Text,
  Box,
  ButtonGroup,
  Center,
  Flex,
  IconButton,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlineRepeat,
  MdPause,
  MdOutlinePlayCircleFilled,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center>
        <ButtonGroup color="gray.600">
          <IconButton
            aria-label="shuffle"
            icon={<MdShuffle fontSize="24px" />}
            outline="none"
            variant="link"
          />
          <IconButton
            aria-label="Skip to previous"
            icon={<MdSkipPrevious fontSize="24px" />}
            outline="none"
            variant="link"
          />
          <IconButton
            aria-label="Play"
            icon={<MdOutlinePlayCircleFilled fontSize="24px" />}
            outline="none"
            variant="link"
          />
          <IconButton
            aria-label="Pause"
            icon={<MdPause fontSize="24px" />}
            outline="none"
            variant="link"
          />
          <IconButton
            aria-label="Skip to next"
            icon={<MdSkipNext fontSize="24px" />}
            outline="none"
            variant="link"
          />
          <IconButton
            aria-label="Repeat"
            icon={<MdOutlineRepeat fontSize="24px" />}
            outline="none"
            variant="link"
          />
        </ButtonGroup>
      </Center>

      <Box color="gray.600">
        <Flex align="flex-end">
          <Box w="10%">
            <Text fontSize="xs">1:21</Text>
          </Box>
          <Box w="80%">
            <RangeSlider
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={321}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box w="10%" textAlign="right">
            <Text fontSize="xs">3:21</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
