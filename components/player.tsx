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
import { useEffect, useRef, useState } from "react";
import { useStoreActions } from "easy-peasy";
import { formatTime } from "../lib/formatters";

const Player = ({ songs, activeSong }: { songs: any; activeSong: any }) => {
  const [playing, setPlaying] = useState(true);
  const [index, setIndex] = useState(
    songs.findIndex((s: any) => s.id === activeSong.id)
  );
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0.1);
  const soundRef = useRef<any>(null);
  const [isSeeking, setIsSeeking] = useState(false);
  const setActiveSong = useStoreActions((state: any) => state.changeActiveSong);
  const repeatRef = useRef(repeat);

  useEffect(() => {
    let timerId: any;
    if (playing && !isSeeking) {
      const f = () => {
        setSeek(soundRef.current.seek());
        timerId = requestAnimationFrame(f);
      };
      timerId = requestAnimationFrame(f);
      return () => cancelAnimationFrame(timerId);
    }
    cancelAnimationFrame(timerId);
  }, [playing, isSeeking]);

  useEffect(() => {
    setActiveSong(songs[index]);
  }, [index, setActiveSong, songs]);

  useEffect(() => {
    repeatRef.current = repeat;
  }, [repeat]);

  const setPlayState = (value: any) => {
    setPlaying(value);
  };

  const prevSong = () => {
    setIndex((state: any) => (state ? state - 1 : songs.length - 1));
  };

  const nextSong = () => {
    setIndex((state: any) => {
      if (shuffle) {
        const next = Math.floor(Math.random() * songs.length);
        if (next === state) {
          return nextSong();
        }
        return next;
      }
      return state === songs.length - 1 ? 0 : state + 1;
    });
  };

  const onEnd = () => {
    if (repeatRef.current) {
      setSeek(0);
      soundRef.current.seek(0);
      return;
    }
    nextSong();
  };

  const onLoad = () => {
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  const onSeek = (e: any) => {
    setSeek(parseFloat(e[0]));
    soundRef.current.seek(parseFloat(e[0]));
  };

  return (
    <Box>
      <Box>
        <ReactHowler
          playing={playing}
          src={activeSong?.url}
          ref={soundRef}
          onLoad={onLoad}
          onEnd={onEnd}
        />
      </Box>
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
            onClick={prevSong}
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
            onClick={nextSong}
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
            <Text fontSize="xs">{formatTime(seek)}</Text>
          </Box>
          <Box w="80%">
            <RangeSlider
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={duration ? (duration.toFixed(2) as any) : 0}
              onChange={onSeek}
              value={[seek]}
              id="player-range"
              onChangeStart={() => setIsSeeking(true)}
              onChangeEnd={() => setIsSeeking(false)}
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box w="10%" textAlign="right">
            <Text fontSize="xs">{formatTime(duration)}</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
