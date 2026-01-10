import express from "express";

const router = express.Router()


import{
    AdminLogin,

}from "../Controller/Admin.controller.js"

router.post("/admin",AdminLogin)

export default router