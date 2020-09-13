import { Router } from 'express';

const router = Router();

/* GET users listing. */
router.get('/', UserController.getAllUsers);

module.exports = router;
