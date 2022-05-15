import React from 'react'
import Card from '../Components/Card';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import {useEffect,useState } from "react"
import Forms from '../Components/Forms';
function Home() {
    
    const [listOFPosts, setListOFPosts] = useState([]);

    useEffect(() => {
        // axios is the methos to get the data from the api
        // Then we are building a promise so we are using then
        axios.get("http://localhost:3001/posts").then((respose) => {
          // It is returning a json object as we are sending it in the index.js in the server
          console.log(respose.data)
          setListOFPosts(respose.data)
        })
      
    },[])
    
  return (
      <div>
          <div className='flex flex-row'>
        <Sidebar />
      
      <div className="App flex flex-wrap lg:my-2 lg:px-2 space-x-1 space-y-1">
      {listOFPosts.map((item,key) => {
        return <Card title={item.title} text={item.postText} username={item.username} key={key} date="22-4-2016" pages="3/10" id={ item.id}/>
         
      })}
        </div>
        <Forms />
        </div>
    </div>
  )
}

export default Home