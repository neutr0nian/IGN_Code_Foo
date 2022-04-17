import React, { useContext, useEffect, useRef, useState } from "react";

const Video = (props) => {
    // props.loading(false);
    const videoRef = useRef();

    useEffect(()=>{
        videoRef.current?.load();
    },[props.data.url])

    return(
    <video
        className="vd-frame cursor-pointer"
        height="auto"
        width="100%"
        controls
        ref={videoRef}
        id={props.data.contentId}
    >
        <source src={props.data.url} type="video/mp4" />
    </video>
    );
}

export default Video;
