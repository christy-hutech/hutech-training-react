import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup"
import styled from "styled-components";

function PostDetails() {
    const params = useParams();
    const navigate = useNavigate();

    let commentList = useSelector((state) => state?.posts?.listComment || []);
    commentList = commentList || [];
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch({ type: "FETCH_COMMENT",payload: params.id });
    }, [params.id]);
    
    useEffect(() => {
      dispatch({ type: "FETCH_POSTDETAILS", payload: params.id});
    },[params.id]);

    let postDetails = useSelector((state) => state?.posts?.postDetails || []);
    postDetails = postDetails || [];

    const userFields = yup.object().shape({
      name: yup.string().min(5).max(40).required(),
      email: yup.string().required(),
      body: yup.string().min(10).max(200).required(),
    })

    const [fieldData, setFieldData] = useState({
      name: "",
      email: "",
      body: "",
    });

    const [formErrors, setFormErrors] = useState({
      name: "",
      email: "",
      body: "",
    });

    const displayErrors = (userFields,fieldData)=>{
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

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch({ type: "ADD_COMMENT",payload: fieldData});
      displayErrors(userFields,fieldData)
      setFieldData({
        name: "",
        email: "",
        body: "",
      });
    }

    const handleChange = ({ currentTarget: input }) => {

      const { name, value } = input;
      setFieldData({
        ...fieldData,
        [name]: value,
      });
      displayErrors(userFields,fieldData)
    };

  console.log(formErrors)

    const StyleWrapper = styled.div`
      color:red;
    `;

    return (
      <div className="ml-5">
        <button className="text-blue-700 p-4 m-2 sticky" onClick={() => navigate("/blogs")}>
              Go Back
        </button>
        <div className="rounded-lg shadow-md shadow-blue-600/50 p-4 m-8 bg-zinc-200 w-3/4 h-1/4"> 
          <h1 className="text-lg">Post Details</h1>
          <div>
            <h1 className="text-2xl">{postDetails?.result?.title || ''}</h1>
            <p className="">{postDetails?.result?.body || ''}</p>
          </div>
        </div> 
        <div>
          <h3 className="p-4 m-2">Comments</h3>
          {commentList.result && commentList?.result?.map((comment,index)=> {
            {if(index < 5) {
              return (
                <div className="rounded-md  p-4 m-8 border-gray-700 shadow-lg w-2/4 bg-zinc-200">
                  <b>{comment?.name || ''} Commented<svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></b>
                  <p>{comment?.email || ''}</p>
                  <p>{comment?.body || ''}</p>
                </div>
              )
            }}
          })}
          <Link
            to={`/blogs/${params.id}/comment`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline p-4 m-8 "
          >
            View All Comments
          </Link>
        </div>
        <div>
        </div>
        <div class="max-w-lg rounded-lg shadow-md shadow-blue-600/50 p-4 m-8 bg-zinc-200">
          <form onSubmit={handleSubmit}>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={fieldData.name}
                onChange={handleChange}
                id="name" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              />
              {formErrors.name && (
                <p className="text-red-700">{formErrors.name}</p>
              )}
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input 
                type="email" 
                name="email"
                value={fieldData.email}
                onChange={handleChange}
                id="email" 
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              />
              {formErrors.email && (
                <p className="text-red-700">{formErrors.email}</p>
              )}
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message</label>
              <textarea 
                id="message" 
                value={fieldData.body}
                name="body"
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              >
              </textarea>
              {formErrors.body && (
                <p className="text-red-700">{formErrors.body}</p>
              )}
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input 
                  id="remember" 
                  type="checkbox" 
                  value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
                />
              </div>
              <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button 
              type="submit" 
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                Submit
            </button>
          </form>
        </div>
      </div>
    );
}

export default PostDetails;