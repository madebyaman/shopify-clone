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
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";

const Player = ({ songs, activeSong }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.1);

  const setPlayState = (value) => {
    setPlaying(value);
  };

  return (
    <Box>
      <Box>{/* <ReactHowler playing={playing} src={activeSong?.url} /> */}</Box>
      <Center>
        <ButtonGroup color="gray.600">
          <IconButton
            aria-label="shuffle"
            icon={<MdShuffle fontSize="24px" />}
            color={shuffle ? "white" : "gray.600"}
            onClick={() => setShuffle((state) => !state)}
            outline="none"
            variant="link"
          />
          <IconButton
            aria-label="Skip to previous"
            icon={<MdSkipPrevious fontSize="24px" />}
            outline="none"
            variant="link"
          />
          {playing ? (
            <IconButton
              aria-label="Pause"
              icon={<MdOutlinePauseCircleFilled fontSize="40px" />}
              outline="none"
              variant="link"
              onClick={() => setPlayState(false)}
            />
          ) : (
            <IconButton
              aria-label="Play"
              icon={<MdOutlinePlayCircleFilled fontSize="40px" />}
              outline="none"
              variant="link"
              onClick={() => setPlayState(true)}
            />
          )}
          <IconButton
            aria-label="Skip to next"
            icon={<MdSkipNext fontSize="24px" />}
            outline="none"
            variant="link"
          />
          <IconButton
            aria-label="Repeat"
            icon={<MdOutlineRepeat fontSize="24px" />}
            color={repeat ? "white" : "gray.600"}
            onClick={() => setRepeat((state) => !state)}
            outline="none"
            variant="link"
          />
        </ButtonGroup>
      </Center>

      <Box color="gray.600">
        <Flex align="center">
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
