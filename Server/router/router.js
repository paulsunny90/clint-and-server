import express from "express"

import {
    cratStudent,
    getUser,
    Putdata,
    Deletedata

}from"../Controller/Controller.js"


const router= express.Router();

router.post('/',cratStudent);
router.get('/',getUser)
router.put('/:id',Putdata)
router.delete('/:id',Deletedata)

export default router


