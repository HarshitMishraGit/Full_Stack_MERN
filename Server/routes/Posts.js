const express = require('express');
const router = express.Router();
const {Posts}=require('../models')

router.get("/",async  (req, res) => {
    const listOfPosts= await Posts.findAll()
    res.json(listOfPosts)
}); 
router.get("/byId/:id", async (req, res) => {
    const id = req.params.id
    // findByPk it means find by primary key so that it returns a row from the data base
    const post = await Posts.findByPk(id)
    // post.hello="Harshit"
    res.json(post)
}); 

router.post("/", async (req, res) => {
    const post = req.body;
    await Posts.create(post);
    res.json(post);
});

module.exports = router;