import { validateRoute } from "../../lib/auth";

// This func uses higher order function validateRoute.
// This file is used by lib/hooks.ts
export default validateRoute((req, res, user) => {
  res.json(user);
});
