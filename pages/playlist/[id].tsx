import jwt from "jsonwebtoken";
import GradientLayout from "../../components/gradientLayout";
import SongTable from "../../components/songsTable";
import prisma from "../../lib/prisma";

const getBgColor = (id: any) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "yellow",
    "teal",
    "purple",
    "pink",
    "gray",
    "cyan",
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }: { playlist: any }) => {
  const color = getBgColor(playlist.id);
  return (
    <GradientLayout
      color={color}
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
      roundImage={false}
    >
      <SongTable songs={playlist.songs} />
    </GradientLayout>
  );
};

export const validateToken = (token: any) => jwt.verify(token, "hello");

export const getServerSideProps = async ({
  query,
  req,
}: {
  query: any;
  req: any;
}) => {
  let user: any;
  try {
    user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }
  const playlist = await prisma.playlist.findFirst({
    where: { id: Number(query.id), userId: user.id },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  };
};

export default Playlist;
