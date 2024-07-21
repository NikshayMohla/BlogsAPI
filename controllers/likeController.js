const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.likePost = async (req, res) => {
    try {
        const { post, user } = req.body
        const like = new Like({
            post, user
        })
        const savedLike = await like.save()

        const udpatedPost = await Post.findByIdAndUpdate(post, { $push: { like: savedLike._id } }, { new: true })
            .populate("like")
            .exec();

        res.json({
            post: udpatedPost,
        });
    }
    catch (e) {
        return res.status(400).json({
            error: `error ${e}`
        })
    }
}

exports.unlikePost = async (req, res) => {
    try {
        const { post, like } = req.body
        const deletedLike = await Like.findOneAndDelete({ post: post, _id: like })
        const udpatedPost = await Post.findByIdAndUpdate(post, { $pull: { like: deletedLike._id } }, { new: true })
            .populate("like")
            .exec();

        res.json({
            post: udpatedPost,
        });

    } catch (e) {
        return res.status(400).json({
            error: `error ${e}`
        })
    }
}