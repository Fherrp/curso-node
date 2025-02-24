const {Router} = require('express');
const { usuarioGet, usuarioPut, usuarioPost, usuarioPatch, usuarioDelete } = require('../controllers/users');

const router = Router();

router.get('/', usuarioGet);

router.put('/:email', usuarioPut);

router.post('/', usuarioPost);

router.patch('/', usuarioPatch);

router.delete('/', usuarioDelete);

module.exports = router;