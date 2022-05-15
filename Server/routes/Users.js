const express = require('express');
const session=require('express-session')
const router = express.Router();
const {Users}=require('../models')
const app = express();

app.use(session({
    secret: 'keyboard cat',
// this resave should be true so that it forcefully sets the session in the store
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}))
  

// router.get("/", async (req, res) => {
//     const user = req.body;
//     const username = user.username;
//     const isAuth= await Users.findAll({where:{username:username}})
//     res.json(isAuth)
// }); 
// router.get("/byId/:id", async (req, res) => {
//     const id = req.params.id
//     // findByPk it means find by primary key so that it returns a row from the data base
//     const post = await Posts.findByPk(id)
//     // post.hello="Harshit"
//     res.json(post)
// }); 

router.post("/", async (req, res) => {
    
    const user = req.body;
    const username=user.username
    const isAuth = await Users.findAll({ where: { username: username } })
    if (isAuth.length == 0) {
        // await Users.create(user);
        res.json({error:"User is already exits"})
    }
    else {
        res.json(user);
    }
    
});

module.exports = router;