const express = require('express');
const app = express();
const db = require('./models')
// now we have to assign the port to server to listen
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("App is running on the port 3301")
    })  
})
    