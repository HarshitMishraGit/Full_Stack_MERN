import './index.css';
import axios from 'axios';
import {useEffect,useState } from "react"
import Card from './Components/Card';
function App() {
  // use effect is for loading the page to get the data from the api 
  // the empty array in the end is for reloading once 
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
    <div className="App flex flex-wrap w-full my-2 px-2">
      {listOFPosts.map((item,key) => {
        return <Card title={item.title} text={item.postText} username={item.usename} key={ key}/>
      })}
      </div>
      
  );
}

export default App;
