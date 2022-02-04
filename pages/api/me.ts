import { validateRoute } from "../../lib/auth";
import prisma from "../../lib/prisma";

// This func uses higher order function validateRoute.
// This file is used by lib/hooks.ts
export default validateRoute(async (req, res, user) => {
  const playlistsCount = await prisma.playlist.count({
    where: { userId: user.id },
  });
  res.json({ ...user, playlistsCount });
});
