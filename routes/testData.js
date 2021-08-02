import express from 'express';

import { createTestData, getUser } from '../controllers/test.js';

const router = express.Router();

router.get('/createData', createTestData);
router.get('/user/:userId', getUser);

export default router;