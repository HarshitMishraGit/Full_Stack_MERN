const express = require('express');
const session=require('express-session')
const router = express.Router();
const bcrypt=require('bcrypt')
const {Users}=require('../models')
const app = express();

app.use(session({
    secret: 'keyboard cat',
// this resave should be true so that it forcefully sets the session in the store
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}))
  

router.get("/",(req, res) => {
    if (!req.session.username) {
       res.json({error:"user is not logged in "})
    } else {
        const user = {
            username: req.session.username,
            email: req.session.email,
            phone: req.session.phone
           
       }
        res.json(user)
   }
}); 

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if(err) {
            res.json({error:err})
        }
        res.json({ msg: "logout successfully" })
        res.redirect("http://loca")
    });
})
 

router.post("/", async (req, res) => {
    
    const user = req.body;
    const username=user.username
    const isAuth = await Users.findAll({ where: { username: username } })
    if (isAuth.length == 1) {
        // await Users.create(user);
        // res.json({ msg: "User is exits" })
        bcrypt.compare(user.password, isAuth[0].password, (err, result) => {
            // if (err) res.json({ error: err });
            if(result==true){
                res.json({ passwordMatch: result ,loggedIn:true})
                req.session.username = username;
                req.session.email = isAuth[0].email;
                req.session.phone = isAuth[0].phone;
            } else {
                res.json({ passwordMatch: result })
                
            }
        })
    
        //  res.json(isAuth[0])  
    }
    else {
        res.json({ msg: "User is not exits" });
    }
    
});

module.exports = router;