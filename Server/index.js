const express = require('express');
const app = express();
const db = require('./models')
const cors = require('cors')
// to use the json as a response
app.use(express.json())
// to use the localhost as api as well as react app
app.use(cors())



// we have to make router to work
const postRouter = require('./routes/Posts')
app.use("/posts",postRouter)
// we have to make router to work
const commentRouter = require('./routes/Comments')
app.use("/comments",commentRouter)
// we have to make router to work
const userLoginRouter = require('./routes/Users')
app.use("/authL",userLoginRouter)
// we have to make router to work
const userRegRouter = require('./routes/UserReg')
app.use("/authSU",userRegRouter)
// now we have to assign the port to server to listen
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("App is running on the port 3301")
    })  
})
    