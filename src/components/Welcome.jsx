import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { VideoContext } from "../context/VideoContext";
import Thumbnail from "./Sidebar";
import Video from "./Video";

const Welcome = () => {
    // let [videoData, setVideoData] = useState();
    // let [videoUrl, setVideoUrl] = useState("");
    // let [mainVideo, setMainVideo] = useState({});

    const [loadMore, setLoadMore] = useState(false);


    const { setGlobalData, isLoading, setisLoading, fetchData, mainVideo, videoData, setVideoData, getMainVideo } =
        useContext(VideoContext);

    const videoAPI = "https://ign-apis.herokuapp.com/";

    const getVideoData = async () => {
        let base = await fetchData(videoAPI);
        let endPoint = base.endpoints[1].sampleRequest;
        let data = await fetchData(endPoint);
        // console.log("setting: ", data.data)
        setGlobalData(data.data);
        setVideoData(data.data);
        if (data.data) {
            getMainVideo(data.data[0].contentId, data.data);
        }
    };

  

    useEffect(() => {
        getVideoData();
    }, []);

    // console.log("Main video: ", videoData);

    return (
        <div>
            <Container className="p-3">
                <Row>
                    <Col md={8} sm={6}>
                    {isLoading ? ( <Video data={mainVideo}/>
                            ): ''}
                        <div className="pt-3">
                            <h2 className="title">{mainVideo.title} </h2>
                            <p>
                                {mainVideo.desc}
                            </p>
                        </div>
                    </Col>
                    <Col md={4} sm={6}>
                        <Stack gap={3}>
                            {videoData.length ? (
                               
                                !loadMore ? (videoData.slice(0,5).map((item, index) => {
                                    // console.log("item: ", item)                             
                                   return(
                                    <Thumbnail key={index} {...item} />
                                   )
                                }
                                )) : (videoData.map((item, index) => {
                                    // console.log("item: ", item)                             
                                   return(
                                    <Thumbnail key={index} {...item} />
                                   )
                                }
                                ))
                            ):''}
                            <button className="load-btn" onClick={()=>setLoadMore(!loadMore)}> 
                                {loadMore? "Show Less" : "Load More"}
                            </button>
                       
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;
