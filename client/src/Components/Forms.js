import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Forms() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    postText: Yup.string().required("Note is required !"),
    username: Yup.string().min(3).max(50).required(),
  });

  const onSubmit = (data) => {
    console.log(data)
    axios.post("http://localhost:3001/posts", data).then((response) => {
      console.log("IT WORKED");
      window.location = "http://localhost:3000/";
    });
  };
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-3xl px-4 py-1 rounded-full shadow hover:shadow-lg outline-none  focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 z-20 fixed bottom-0 right-0"
        type="button"
        onClick={() => setShowModal(true)}
      >
      +
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t ">
                  <h3 className="text-3xl font-semibold text-white">
                    Add Notes
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                 {/* formik */}
     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                    <div className="my-4 text-slate-500 text-lg leading-relaxed">
                        
                       
                        <div className="mb-6">
                          <label  className="block mb-2 text-sm font-medium text-white">Title</label>
                          <ErrorMessage className="text-gray-200 text-sm" name="title" component="span"/>
                        <Field type="text" id="inputCreatePost" className="focus:outline-none focus:ring-offset-0 text-white placeholder-gray-200 text-sm rounded-lg  block w-full p-2.5 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700" placeholder="" name="title" />
                      </div>
                                        
                        <label  className="block mb-2 text-sm font-medium text-white">Your Note : </label>
                        <ErrorMessage className="text-gray-200 text-sm" name="postText" component="span"/>
                        {/* fiels as="textarea means it look like a textarea" */}
                      <Field as="textarea" id="inputCreatePost" className="block p-2.5 w-full text-sm text-gray-100 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg  focus:outline-none placeholder:text-gray-200" placeholder="Enter something..." name="postText" />
                                        
                      <div className="mt-6">
                        <label htmlFor="username-success" className="block mb-2 text-sm font-medium text-white">Your name</label>
                        <ErrorMessage className="text-gray-200 text-sm" name="username" component="span"/>

                        <Field type="text" id="inputCreatePost" className="focus:outline-none focus:ring-offset-0 text-white placeholder-gray-200 text-sm rounded-lg  block w-full p-2.5 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700" placeholder="Bonnie Green" name="username"/>
                      </div>

                    </div>
                
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b ">
                  <button
                    className="text-red-500 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-lg font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
  );
}