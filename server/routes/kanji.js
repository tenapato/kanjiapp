import express from 'express';

import {getKanji, createKanji} from '../controllers/kanji.js'

const router = express.Router();

router.get('/', getKanji);
router.post('/', createKanji);

export default router;