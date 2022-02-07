import { Box, Flex, Text, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import { ReactNode } from "react";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

interface HomePropsInterface {
  artists?: any;
  // eslint-disable-next-line react/no-unused-prop-types
  children?: ReactNode;
}

const Home: NextPage = ({ artists }: HomePropsInterface) => {
  const { user, isLoading, isError } = useMe();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error: {isError}</Text>;
  }

  return (
    <GradientLayout
      color="green"
      subtitle="profile"
      title={`${user.firstName} ${user.lastName}`}
      description={`${user.playlistsCount} public playlists`}
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
      roundImage
    >
      <div>Home Page</div>
      <Box color="white" px="40px">
        <Box mb="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist: any) => (
            <Box px="10px" w="20%" key={artist.id}>
              <Box bg="gray.900" borderRadius="4px" p="15px" w="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box mt="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

Home.defaultProps = {
  artists: [],
  children: null,
};

export const getServerSideProps = async () => {
  const artists: any = await prisma.artist.findMany({});
  return {
    props: { artists },
  };
};

export default Home;
