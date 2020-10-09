const { where } = require('../models/post');
const Post = require('../models/post');



const getPosts = async(req, res) => {

    const posts = await Post.find();

    res.json({
        ok: true,
        msg: 'Obteniendo posts!',
        posts: posts
    });

};



const crearPost = async(req, res) => {

    const post = new Post(req.body);
    await post.save();

    res.json({
        ok: true,
        msg: 'post creado',
        post: post
    });
};


const actualizarPost = async(req, res) => {

    try {
        const id = req.params.id;
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            ok: true,
            msg: 'post actualizado',
            post: post,
            id: id
        });

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: error + 'error, no se pudo actualizar el post',
        });
    }
};




const getPost = async(req, res) => {

    try {
        console.log(req.params.id);

        const post = await Post.findById(req.params.id);

        res.status(200).json({
            ok: true,
            msg: 'post obtenido',
            post: post
        });

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'error, no se pudo obtener el post',
        });
    }
};




const deletePost = async(req, res) => {

    try {

        const postBorrado = await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({
            ok: true,
            msg: 'post eliminado',
            post: postBorrado
        });

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'error, no se pudo borrar el post',
        });
    }

};



module.exports = {
    getPosts,
    crearPost,
    actualizarPost,
    getPost,
    deletePost
};