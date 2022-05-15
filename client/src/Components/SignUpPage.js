import React from 'react';
import axios from "axios";
import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useState } from "react";

function SignUpPage() {
    // const [p, setp] = useState('');
    // const [confP, setconfP] = useState('');
    // const [confPMsg, setconfPMsg] = useState('');
    const initialValues = {
        username: "",
        password: "",
        confPassword: "",
        email: "",
        phone: "",
      
    };
 

      const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required!"),
        password: Yup.string().required("Please enter your password") .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        confPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
        email: Yup.string().matches(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "please provide a valid mail"),
        phone: Yup.string().matches(/^(\+\d{1,3}[- ]?)?\d{10}$/,
        "please provide a valid mobile no."),
        
      });
    
      const onSubmit = (data) => {
        console.log(data)
        axios.post("http://localhost:3001/authSU", data).then((response) => {
          console.log(response);
          window.location = "http://localhost:3000/authL";
          if (response.data.error) {
            alert('user already registered');
            window.location = "http://localhost:3000/authSU";
            
          }
        });
      };

   
  return (
    < div className='w-full h-[100vh] py-10 bg-gray-100'>
      <div className='w-1/3 mx-auto  bg-gray-800 px-7 py-3 rounded-lg'>
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
<div className="mb-6">
<label htmlFor="confPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
            <Field type="password" name="confPassword" id="confPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <ErrorMessage className="text-orange-200 text-xs" name="confPassword" component="span"/>
            
</div>
<div className="mb-6">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
            <Field type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <ErrorMessage className="text-orange-200 text-xs" name="email" component="span"/>
            
</div>
<div className="mb-6">
<label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile No</label>
            <Field type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <ErrorMessage className="text-orange-200 text-xs" name="phone" component="span"/>
            
</div>


<button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</Form>
</Formik>
      </div>
      </div>
  )
}

export default SignUpPage