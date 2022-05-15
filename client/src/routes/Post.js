import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Post() {
    const [post, setPost] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((respose) => {
            console.log(respose.data)
            setPost(respose.data)
        })
      
    },[])
  return (
      <div className='flex flex-row justify-center my-3'>
         
          
<a href="#" className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row w-1/2 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
<img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt=""/>
<div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title} { post.user}</h5>
<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.postText}</p>
</div>
</a>

    </div>
  )
}

export default Post