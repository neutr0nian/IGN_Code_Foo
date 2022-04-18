import React, { useContext, useEffect, useRef, useState } from "react";

const Video = (props) => {
    // props.loading(false);
    const videoRef = useRef();

    useEffect(() => {
        videoRef.current?.load();
    }, [props.data.url]);

    return (
        <div className="vd">
            <video
                className="vd-frame  cursor-pointer"
                height="auto"
                width="100%"
                controls
                ref={videoRef}
                id={props.data.contentId}
            >
                <source src={props.data.url} type="video/mp4" />
            </video>
            <p className="overlay text-white">Here goes the title</p>
        </div>
    );
};

export default Video;
