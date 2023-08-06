import express from 'express'
import { auth } from '../middleware/auth'
import {getFeedPosts, getUserPosts, likePost} from '../controllers/posts.js'

const router = express.Router()

router.get("/", auth, getFeedPosts )
router.get("/:userId/posts", auth, getUserPosts )

router.patch("/:id/like", auth, likePost)
export default router