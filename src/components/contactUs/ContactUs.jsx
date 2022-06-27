import {userSchema} from './validation'
import * as yup from "yup";
import React, { useState } from "react";
import  '../../media/style/style.css';
import styled from "styled-components";

function ContactUs(props) {

  const [fieldData, setFieldData] = useState({
    name: "",
    email: "",
    options: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    options: "",
    phone: "",
    message: "",
  });


  const displayErrors = (userSchema,fieldData)=> {
    let genratedErrors = {};
    let newFormErrors = {};
    try {
      userSchema.validateSync(fieldData, { abortEarly: false });
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    displayErrors(userSchema,fieldData)
  };

  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    setFieldData({ ...fieldData, [name]: value });
    displayErrors(userSchema,fieldData)
  };

  return (
    <div className='wrapper-c-section'>
      <div className='section-c-1  bg-gradient-to-r from-gray-900 ... gradiant'>
        <div className='contact-form w-3/6 bg-lime-600 rounded-lg min-h-56 text-center ... top-48 left-80 py-9'>
          <form onSubmit={handleSubmit}>
            <p className='mb-6'>
              <input 
                className='p-8 rounded-lg w-10/12 h-16 text-black' 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Name"
                onChange={handleChange} 
              />
              {formErrors.name && (
                <p className="text-red-700">{formErrors.name}</p>
              )}
            </p>
            <p  className='mb-6'>
              <input 
                className='p-8 rounded-lg w-10/12 h-16 text-black' 
                type="email" 
                id="email" 
                name="email" 
                placeholder="example@gmail.com"
                onChange={handleChange} 
              />
              {formErrors.email && (
                <p className="text-red-700">{formErrors.email}</p>
              )}
            </p>
            <p  className='mb-6'>
                <select  
                  className='p-5 rounded-lg w-10/12 text-black' 
                  name="options"
                  onChange={handleChange} 
                >
                <option value="volvo">sale</option>
                <option value="saab">customer</option>
                <option value="mercedes">care</option>
                <option value="audi">general </option>
                <option value="audi">query </option>
              </select>
              {formErrors.options && (
                <p className="text-red-700">{formErrors.options}</p>
              )}
            </p>
            <p className='mb-6'>
              <input 
                className='p-8 rounded-lg w-10/12 h-16 text-black' 
                type="tel" 
                id="phone" 
                name="phone"  
                placeholder="Phone number"
                onChange={handleChange} 
              />
              {formErrors.phone && (
                <p className="text-red-700">{formErrors.phone}</p>
              )}
            </p>
            <p className='mb-6'>
              <textarea 
                rows="4" 
                cols="50" 
                className='p-8 rounded-lg w-10/12 text-black' 
                placeholder="Discreption" 
                name="message"
                onChange={handleChange} 
              >
              </textarea>
              {formErrors.message && (
                <p className="text-red-700">{formErrors.message}</p>
              )}
            </p>
            <p>
              <button 
                name='submit' 
                className='rounded-lg bg-white text-amber-500 ml-1 p-5'
              >
                Submit
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}


export default ContactUs
