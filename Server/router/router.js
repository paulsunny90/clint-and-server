import express from "express"

import {
    cratStudent,
    getUser
}from"../Controller/Controller.js"
import { get } from "mongoose";

const router= express.Router();

router.post('/',cratStudent);
router.get('/',getUser)

export default router


