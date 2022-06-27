import * as yup from "yup";
import React, { useState} from "react";
import  '../../media/style/style.css';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function ContactUs() {
  const dispatch = useDispatch();
  let addNewPost = useSelector((state) => state?.posts?.addPost || []);
  addNewPost = addNewPost || [];

  const [fieldData, setFieldData] = useState({
    title: "",
    body: "",
  });

  const [formErrors, setFormErrors] = useState({
    title: "",
    body: "",
  });

  const userFields = yup.object().shape({
    title: yup.string().min(5).max(40).required(),
    body: yup.string().min(10).max(200).required(),
  })

  const displayErrors = (userFields,fieldData)=> {
    let genratedErrors = {};
    let newFormErrors = {};
    try {
      userFields.validateSync(fieldData, { abortEarly: false });
    } catch (e) {
      if (e.inner.length > 0) {
        e.inner.forEach((error) => {
          genratedErrors[error.path] = error.message;
        });
      }
    }
    Object.keys(formErrors).forEach((name) => {
      if (genratedErrors[name]) {
        newFormErrors[name] = genratedErrors[name];
      } else {
        newFormErrors[name] = "";
      }
    });
    setFormErrors({
      ...formErrors,
      ...newFormErrors,
    });
  }


  const handleSubmit =  (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_POST" ,payload:fieldData});
    displayErrors(userFields,fieldData)
    setFieldData({
      title: "",
      body: "",
    });
  };

  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setFieldData({ ...fieldData, [name]: value });
    displayErrors(userFields,fieldData)
  };

  return (
    // <StyleWrapper>  
      <div className='wrapper-c-section'>
        <div className='section-c-1  bg-gradient-to-r from-gray-900 ... gradiant'>
          <div className='contact-form w-3/6 bg-lime-600 rounded-lg min-h-56 text-center ... top-48 left-80 py-9'>
            <form onSubmit={handleSubmit} method="post">
              <p className='mb-6'>
                <input  
                  onChange={handleChange} 
                  value={fieldData.title} 
                  className='p-8 rounded-lg w-10/12 h-16 text-black' 
                  type="text" id="name" 
                  name="title" 
                  placeholder="Title"
                />
                {formErrors.title && (
                  <p className="text-red-700">{formErrors.title}</p>
                )}
              </p>
              <p className='mb-6'>
                <textarea 
                  name="body" 
                  onChange={handleChange} 
                  rows="4" cols="50" 
                  className='p-8 rounded-lg w-10/12 text-black' 
                  placeholder="Message" 
                  value={fieldData.body}
                >
                </textarea>
                {formErrors.body && (
                  <p className="text-red-700">{formErrors.body}</p>
                )}
              </p>
              <p>
                <button name='submit' className='rounded-lg bg-white text-amber-500 ml-1 p-5'>Add New Post</button>
              </p>
            </form>
            <Link
                to={`/blogs`}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
                Back
            </Link>
          </div>
        </div>
      </div>
    // </StyleWrapper>
  )
}


export default ContactUs
