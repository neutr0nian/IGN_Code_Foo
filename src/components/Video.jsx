import React, { useContext, useEffect, useRef, useState } from "react";
import { VideoContext } from "../context/VideoContext";

const Video = (props) => {

    // console.log(props.data)
    const data = props.data;
    const { getMainVideo, nextVideo } = useContext(VideoContext);
    // props.loading(false);
    const videoRef = useRef();
    const [isPause, setIsPause] = useState(true);
    
    useEffect(() => {
        videoRef.current?.load();
    }, [props.data.url]);

    const handleChange = (event)=> {
        let currentTime = event.target.currentTime;
        let duration = event.target.duration;

        setIsPause(true);
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
                poster={data.cover.url}
                id={data.contentId}
                onPlay={()=>setIsPause(false)}
                onPause ={handleChange}
            >
                <source src={props.data.url} type="video/mp4" />
            </video>
            <p className= {`${isPause?"overlay ": ""}`+  "text-white"}>Here goes the title</p>
        </div>
    );
};

export default Video;
