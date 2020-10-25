const express = require("express");
const PORT = process.env.PORT || 3000;
const router = express.Router();
const path = require("path");
const Burger = require('../models/burger.js');

// List all burgers
router.get("/",async function(req,res){
    const burgers = 
    res.json({"message" : "Hello World"});
});

// submit burger
router.post("/",function(req,res){
    res.json({"message" : "Hello World"});
});

// update burger
router.put("/:id",function(req,res){
    res.json({"message" : "Hello World"});
});

module.exports = router;

