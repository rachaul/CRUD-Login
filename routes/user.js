import express from 'express';
import { deleteLogin, getLogin, getLoginById, saveLogin, updateLogin } from '../Controller/loginController.js';

const router = express.Router();

router.get('/', getLogin);
router.get('/:id', getLoginById);
router.post('/', saveLogin);
router.patch('/:id', updateLogin);
router.delete('/:id', deleteLogin);

export default router;