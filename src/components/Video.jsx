import React, { useContext, useEffect, useRef, useState } from "react";
import { VideoContext } from "../context/VideoContext";

const Video = (props) => {

    const { getMainVideo, nextVideo } = useContext(VideoContext);
    // props.loading(false);
    const videoRef = useRef();
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        videoRef.current?.load();
    }, [props.data.url]);

    const handleChange = (event)=> {
        let currentTime = event.target.currentTime;
        let duration = event.target.duration;

        console.log(duration, currentTime)
            if(currentTime == duration){
                console.log("close interval")
                getMainVideo(nextVideo);
            }
    }
    return (
        <div className="vd">
            <video
                className="vd-frame  cursor-pointer"
                height="auto"
                width="100%"
                controls
                ref={videoRef}
                id={props.data.contentId}
                onPause ={handleChange}
            >
                <source src={props.data.url} type="video/mp4" />
            </video>
            <p className="overlay text-white">Here goes the title</p>
        </div>
    );
};

export default Video;
