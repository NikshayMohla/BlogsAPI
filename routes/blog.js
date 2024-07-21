const express = require("express")

const router = express.Router()

const { createComment } = require("../controllers/commentController")
const { createPost, getAllPost } = require("../controllers/postController")
const { likePost } = require("../controllers/likeController")


router.post("/comments/create", createComment)
router.post("/posts/create", createPost)
router.get("/posts/getAll", getAllPost)
router.post("/likes/like", likePost)

module.exports = router