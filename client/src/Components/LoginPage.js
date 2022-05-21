import React from 'react';
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


function LoginPage() {
    const initialValues = {
      username:"",
      password:"",
     
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
        
      });
    
      const onSubmit = (data) => {
        console.log("This is the recived data : " , data)
        axios.post("http://localhost:3001/authL", data).then((response) => {
          console.log(response);
          const loggedIn = response.data.loggedIn;
          const passwordMatch = response.data.passwordMatch;
          if (loggedIn == true && passwordMatch == true) {
            alert("You are logged in")
            // window.location='/'
          } else if (passwordMatch == false) {
            alert("Invalid Cridential");
            window.location = "/authL";

          } else {
            alert("User is not registered");
            window.location = "/authSU";
          }

        });
      };

   
  return (
      <div className='w-1/3 mx-auto my-10 bg-gray-800 px-7 py-3 rounded-lg'>
     <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          
<Form>
<div className="mb-6">
<label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
            <Field type="text" id="username" name="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required />
            <ErrorMessage className="text-orange-200 text-xs" name="username" component="span"/>
            
</div>
<div className="mb-6">
<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <Field type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <ErrorMessage className="text-orange-200 text-xs" name="password" component="span"/>
            
</div>

<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</Form>
</Formik>
    </div>
  )
}

export default LoginPage