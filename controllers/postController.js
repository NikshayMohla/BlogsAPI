const { error } = require("console")
const Post = require("../models/postModel")

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body
        const post = new Post({
            title, body
        })
        const savedPost = await post.save()


        res.json({
            post: savedPost
        })
    }
    catch (e) {
        return res.status(400).json({
            error: `Error 400 ${e}`
        })
    }
}

exports.getAllPost = async (req, res) => {
    try {
        const posts = await Post.find().populate("comments").populate("like").exec()
        res.json({
            posts
        })
    }
    catch (e) {
        return res.status(400).json({
            error: `Error 400 ${e}`
        })
    }
}