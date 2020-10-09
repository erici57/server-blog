/*
        Ruta: api/post
*/


const { Router } = require('express');
const { crearPost, actualizarPost, getPosts, getPost, deletePost } = require('../controllers/post');

const router = Router();

// obtener todos los posts
router.get('/', getPosts);

//guardar post creado
router.post('/', crearPost);

//actualizar post 
router.put('/:id', actualizarPost);

//obtener un post 
router.get('/:id', getPost);

//eliminar post 
router.delete('/:id', deletePost);




module.exports = router;