import React from 'react';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


function LoginPage() {
    const initialValues = {
        title: "",
        postText: "",
        username: "",
      };
    
      const validationSchema = Yup.object().shape({
        title: Yup.string().required("You must Input a Title!"),
        postText: Yup.string().required("Note is required !"),
        username: Yup.string().min(3).max(50).required(),
      });
    
      const onSubmit = (data) => {
        console.log(data)
        axios.post("http://localhost:3001/authL", data).then((response) => {
          console.log(response);
        //   window.location = "http://localhost:3000/";
        });
      };

   
  return (
      <div className='w-1/3 mx-auto my-10 bg-gray-800 px-7 py-3 rounded-lg'>
     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          
<Form>
<div className="mb-6">
<label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
<Field type="text" id="username" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required/>
</div>
<div className="mb-6">
<label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
<Field type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
</div>
<div className="flex items-start mb-6">
<div className="flex items-center h-5">
<Field id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
</div>
<label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
</div>
<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</Form>
</Formik>
    </div>
  )
}

export default LoginPage