const express = require('express');
const router = express.Router();
const bcrypt=require('bcrypt')
const {Users}=require('../models')



// ========================>>> remember you not have to use this following statement inside the router folder or in any other folder than the 
// index.js because the app is define in that folder so you cannot define another app=express() in any other folder <<<<<<<<<================
                        // app.use(session({
                        //     secret: 'keyboard cat',
                        // // this resave should be true so that it forcefully sets the session in the store
                        //     resave: true,
                        //     saveUninitialized: true,
                        //     // cookie: { secure: true }
                        //   }))
                        

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
        // res.redirect("http://loca")
    });
})
 

router.post("/", async (req, res) => {
    
    const user = req.body;
    const sess = req.session;
    const username=user.username
    const isAuth = await Users.findAll({ where: { username: username } })
    if (isAuth.length == 1) {
        // await Users.create(user);
        // res.json({ msg: "User is exits" })
        bcrypt.compare(user.password, isAuth[0].password, (err, result) => {
            // if (err) res.json({ error: err });
            if(result==true){
                sess.username = username;
                sess.email = isAuth[0].email;
                sess.phone = isAuth[0].phone;
                res.json({ passwordMatch: result, loggedIn: true ,user:sess.username})
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