import express from 'express';
import UserController from '../controllers/UserController';
const router = express.Router();

router.post('/users/create', UserController.create);
router.get('/users/:id', UserController.get);
router.get('/users', UserController.list);

export { router };
