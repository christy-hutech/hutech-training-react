import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

function Comment() {
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: "FETCH_COMMENT",payload: params.id });
    }, [params.id]);

    let commentList = useSelector((state) => state?.posts?.listComment || []);
    commentList = commentList || [];
    
    const goback = ()=>{
        window.history.go(-1); return false
    }
    return (
        <div>
            <p>
                <button className="text-blue-700 sticky" onClick={goback}>Go Back</button>
            </p>
            <h3 className=" p-4">All Comments </h3>
            <div>
                {commentList.result && commentList?.result?.map((comment,index)=> {
                    return (
                        <div className="rounded-md p-4 m-8 border-gray-700 shadow-lg w-2/4 bg-zinc-200">

                            <b><span>{comment.name} Commented</span><span><svg class="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg></span></b>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Comment