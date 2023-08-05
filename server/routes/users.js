import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";

import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/:id", auth, getUser);
router.get("/:id/friends", getUserFriends);

router.patch("/:id/:friendId", addRemoveFriend);

export default router;
