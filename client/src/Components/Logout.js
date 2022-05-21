import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom';
function Logout() {
        const navigate=useNavigate()
        // axios is the methos to get the data from the api
        // Then we are building a promise so we are using then
        axios.post("http://localhost:3001/authL/logout").then((respose) => {
          // It is returning a json object as we are sending it in the index.js in the server
          console.log(respose.data)
        })
      
        navigate('/')
        // window.location="/"
    
  return (
      <div>
          
    </div>
  )
}

export default Logout