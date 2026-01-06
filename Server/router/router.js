import express from "express"

import {
    cratStudent
}from"../Controller/Controller.js"

const router= express.Router();

router.post('/',cratStudent);

export default router


