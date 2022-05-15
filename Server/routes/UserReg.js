const express = require('express');
const router = express.Router();
const bcrypt =require('bcrypt')
const {Users}=require('../models')



router.get("/",  (req, res) => {
    res.status(404);
}); 

router.get("/userAvailable/:username", async (req, res) => {
    const username = req.params.username;
    const isAuth = await Users.findAll({ where: { username: username } });
    if (isAuth.length !== 0) {
        res.json({ error: "user is already exist" })
        
    }


})
router.post("/", async (req, res) => {
    const user = req.body;
    const username=user.username
    
    
    let regUser = {
        username: user.username,
        // password: hashing
        email: user.email,
        phone:user.phone,
    }
    
    
        
        const p= await bcrypt.hash(user.password, 10).then((hash) => {
            console.log(hash)
            // hashing = hash;
            regUser.password = hash;
        });
        
    

   

    const isAuth = await Users.findAll({ where: { username: username } })
    if (isAuth.length == 0) {
        await Users.create(regUser);
        res.json(regUser);
    }
    else {
        res.json({error:"User is already exits"})
    }
    
});

module.exports = router;