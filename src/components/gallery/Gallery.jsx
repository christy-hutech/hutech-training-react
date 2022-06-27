import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";


function Gallery(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "FETCH_PHOTOS" });
    }, []);

    let gallery = useSelector((state) => state?.posts?.addGallery || []);
    gallery = gallery || [];
    
    return (
        <div className='wrapper-section'>
            <div className='section-g-1 content-center ... bg-gradient-to-r from-gray-900 ... gradiant'>
                <h1 className='font-mono text-white w-2/5 p-8 text-4xl'>Gallery </h1>
                <div className='gallery flex flex-wrap p-2.5 relative'>
                    {gallery?.result?.map((elem,index)=> {
                        if(index <30) {
                        return(
                            <div>
                                <a class="lightbox" href={"#dog"+index}>
                                    <img className='w-44' src={elem.url}  width="350" height="300"/>
                                </a>
                                <div class="lightbox-target" id={"dog"+index}>
                                    <img className='w-44 rounded-lg' src={elem.url}/>
                                    <a class="lightbox-close" href="#">X</a>
                                </div>
                            </div>
                        )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gallery
