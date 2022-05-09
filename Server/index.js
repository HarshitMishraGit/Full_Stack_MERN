const express = require('express');
const app = express();
const db = require('./models')
const cors=require('cors')
app.use(express.json())
app.use(cors())
// we have to make router to work
const postRouter = require('./routes/Posts')
app.use("/posts",postRouter)
// now we have to assign the port to server to listen
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("App is running on the port 3301")
    })  
})
    