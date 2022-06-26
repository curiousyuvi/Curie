import express from 'express';
import { createRoomController, deleteRoomController, getRoomController, joinUserController, removeUserController, updateRoomController } from '../controllers/roomController';
const router = express.Router();

router.get('/:rid', getRoomController);

router.get('/join_user/:rid', joinUserController)

router.get('/remove_user/:rid', removeUserController)

router.get('/delete/:rid', deleteRoomController);

router.post('/update/:rid', updateRoomController);

router.post('/create', createRoomController);

export default router;