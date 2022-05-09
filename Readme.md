# How to start

1. To start just do this : 

```jsx
npm init -y
```


![Untitled](https://user-images.githubusercontent.com/93585405/167426865-1198a75a-bb85-4857-8803-16ca7cfc4480.png)


<aside>
💡 here the main section contains index.js so we created an app called index.js

Suppose if you want to create app.js , you can but first you have to edit the same in the package.json

</aside>

1. Now you have to install some packages like

```jsx
npm i express cors mysql2
```

<aside>
💡 These are the standard packages so that we can connect the mysql and the node app

</aside>

1. so we also have to install a package called sequelize and sequelize-cli

```jsx
npm i sequelize sequelize-cli -g
sequelize init // it will initialize some folders 
```

1. Then you have to delete the migration and seeders file
2. Then you have to create a Posts.js inside the models folder 

![Untitled 2](https://user-images.githubusercontent.com/93585405/167427031-0108aa66-9b50-429a-88a7-43f842d4f88c.png)


1. Now you have to add this into your index.js it root directory

<aside>
💡 Most important you to change the details inside the config.json in the config folder

</aside>

<aside>
💡 You also have to install nodemon so that you do not have to worry always to run the server after some change

</aside>

![Untitled 1](https://user-images.githubusercontent.com/93585405/167427075-12776556-b944-4b82-8582-afb372e3767d.png)


- Code
    
    ```jsx
    const express = require('express');
    const app = express();
    const db = require('./models')
    // now we have to assign the port to server to listen
    db.sequelize.sync().then(() => {
        app.listen(3001, () => {
            console.log("App is running on the port 3301")
        })  
    })
    ```
