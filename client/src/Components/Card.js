import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import '../index.css';
import { Link } from "react-router-dom";
// import './maximize.svg'
export default function Card(props) {
  const initialValues = {
    title: `${props.title}`,
    postText: `${props.text}`,
    username: `${props.username}`,
  };

  const validationSchema = Yup.object().shape({
    
    // title:Yup.string().required("You must input a Title!"),
    // postText: Yup.string().required("Note is required !"),
    // username: Yup.string().min(3).max(50).required(),
  });

  const onSubmit = (data) => {
    console.log(data)
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("IT WORKED");
      window.location = "http://localhost:3000/";
    });
  };
  const [showCardModal, setshowCardModal] = React.useState(false);
  
     
    
    

  return (
      
          
  
 
    <div className="shadow-lg mt-1 mx-1 sm:mr-0 rounded-xl w-full sm:w-[33%] p-4 bg-white dark:bg-gray-800 relative overflow-hidden cursor-pointer">
     
    <a  className="w-full h-full block" onClick={()=>{setshowCardModal(true)}}>
        <div className="w-full">
            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
              {props.title}
            </p>
            <p className="text-gray-400 dark:text-gray-300 text-xs font-medium mb-2">
               {props.date}
            </p>
            <p className="text-gray-400 dark:text-gray-300 text-sm mb-4">
                {props.text}
            </p>
            <div className="flex dark:text-gray-200 items-center justify-between">
                <p>
                   {props.username}
                </p>
                <p>
                    {props.pages}
                </p>
            </div>
            <div className="w-full h-2 bg-gray-400 rounded-full mt-3 mb-6">
                <div className="w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full">
                </div>
            </div>
           
        </div>
      {/* <CardModal title={props.title} postText={props.text} username={props.username} showCardModal={showCardModal} setshowCardModal={setshowCardModal} />  */}
      </a>

      {/* this is the Card Modal */}
      <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-3xl px-4 py-1 rounded-full shadow hover:shadow-lg outline-none  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 z-20 "
        type="button"
        onClick={() => setshowCardModal(true)}
      >
      +
      </button> */}
      {showCardModal ? (
        <>
          <div
                      className={` justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-40 `}
          >
            <div className="relative w-[90%] sm:w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                            {/* formik */}
     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
                  {/*header*/}
                <div className="flex items-start justify-between  border-b border-solid border-slate-200 rounded-t bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 ">
                  {/* <h3 className="text-3xl font-semibold text-white">
                    Edit Notes
                  </h3> */}
                   <ErrorMessage className="text-gray-200 text-sm" name="title" component="span"/>
                   <Field type="text" id="inputCreatePost" className="bg-transparent focus:outline-none focus:ring-offset-0 text-white placeholder-gray-200 text-3xl rounded-t-lg  block w-full p-5  font-bold" placeholder="" name="title"  />
                  <Link
                          className="p-1 ml-auto border-0 text-gray-200 flex felx-row float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setshowCardModal(false)}
                          to={`/post/${props.id}`}    >
                          {/* <img src="./maximize.svg" className="w-5 h-5" /> */}
                          <span className="text-xs text-gray-300 w-24">Open as page</span>
                          <img src={process.env.PUBLIC_URL+"maximize.svg"} className="w-4 h-5 text-gray-200" />
                  </Link>
                </div>
     
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-slate-500 text-lg leading-relaxed">
                        
                       
                        
                                        
                        <label  className="block mb-2 text-sm font-medium text-white">Your Note : </label>
                        <ErrorMessage className="text-gray-200 text-sm" name="postText" component="span"/>
                        {/* fiels as="textarea means it look like a textarea" */}
                      <Field as="textarea" id="inputCreatePost" className="block p-2.5 w-full text-sm text-gray-100 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg  focus:outline-none placeholder:text-gray-200" placeholder="Enter something..." name="postText" rows={14}  />
                                        
                      <div className="mt-6">
                        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-white">Your name</label>
                        <ErrorMessage className="text-gray-200 text-sm" name="username" component="span"/>

                        <Field type="text" id="inputCreatePost" className="focus:outline-none focus:ring-offset-0 text-white placeholder-gray-200 text-sm rounded-lg  block w-full p-2.5 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700" placeholder="Bonnie Green" name="username" />
                      </div>

                    </div>
                
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b ">
                  <button
                    className="text-red-500 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowCardModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg text-white active:bg-gradient-to-r-from-indigo-200-via-purple-200-to-pink-200  font-bold uppercase text-sm px-6 py-2  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save Changes
                  </button>
                    </div>
          </Form>
      </Formik>
              </div>
            </div>
            
          </div>
          
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      </>
      {/* this is the Card Modal */}
      
</div>


   
  );
}
