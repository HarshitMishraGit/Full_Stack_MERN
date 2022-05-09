import React from "react";
import '../index.css'
export default function Card(props) {
  return (
      
          
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 roundedLg overflow-hidden text-center relative">
          <h2 className="trackingWidest text-xs title-font font-medium text-gray-400 mb-1">
            CATEGORY
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
            {props.title}
          </h1>
          <p className="leading-relaxed mb-3">{props.text}</p>
          <a className="text-indigo-500 inline-flex items-center">
            {props.username}
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
   
  );
}
