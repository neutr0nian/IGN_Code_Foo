import React, { useState } from "react";
import { PROXY } from "../config";

export const VideoContext = React.createContext();

export const VideoProvider = ({ children }) => {
    const [isLoading, setisLoading] = useState(false);
    const [videoData, setVideoData] = useState([]);
    const [mainVideo, setMainVideo] = useState({});
    const [globalData, setGlobalData] = useState([]);
    const [status, setStatus] = useState();
    const [nextVideo, setNextVideo] = useState(0);
    const [cinemaMode, setCinemaMode] = useState(false);
    
    const fetchData = async (url) => {
        //proxy to fix cors error
        let res;
        try {
            await fetch(PROXY + url, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Here: ", data);
                    res = data;
                });
        } catch (error) {
            console.log("Could not fetch ", error);
        }
        return res;
    };

    const getMainVideo = (id, data) => {
        // console.log("MAIN:", globalData);
        // console.log("next video: ", nextVideo);

        let [matchingVid, filteredVid] = data
            ? filterVideo(id, data)
            : filterVideo(id, videoData);
        // console.log("Matching: ", matchingVid, filteredVid);

        let videoObj = matchingVid[0];
        let nextVideoId = videoObj.id + 1;
        
        if(globalData.length){
            setNextVideo(globalData[nextVideoId].contentId);
        }else{
            setNextVideo(data[nextVideoId].contentId);
        }

        let videoDetails = {};

        videoDetails["contentId"] = videoObj.contentId;
        videoDetails["url"] = videoObj.assets[2].url;
        videoDetails["cover"] = videoObj.thumbnails[2];
        videoDetails["title"] = videoObj.metadata.title;
        videoDetails["desc"] = videoObj.metadata.description;

        if (Object.keys(mainVideo).length) {
            let m = globalData.filter(
                (item) => item.contentId == mainVideo.contentId
            )[0];
            setVideoData([...filteredVid, m]);
        } else setVideoData([...filteredVid]);
        setMainVideo(videoDetails);
        setisLoading(true);
    };

    // setisLoading(false);
    const filterVideo = (id, data) => {
        // console.log("Id and data:", id, data)
        setisLoading(false);
        let d = globalData.length ? globalData : data;
        let match = d.filter((item, index) => {
            if(item.contentId == id){
                item["id"] = index;
                return item;
            }
        });
        let filter = data.filter((item) => item.contentId != id);
        // console.log(match, filter)
        return [match, filter];
    };

    return (
        <VideoContext.Provider
            value={{
                setGlobalData,
                fetchData,
                mainVideo,
                setMainVideo,
                videoData,
                setVideoData,
                getMainVideo,
                isLoading,
                setisLoading,
                status,
                setStatus,
                nextVideo,
                cinemaMode,
                setCinemaMode,
            }}
        >
            {children}
        </VideoContext.Provider>
    );
};
