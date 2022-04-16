import React, { useEffect, useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Thumbnail from "./Sidebar";

const Welcome = () => {
    let [videoData, setVideoData] = useState([]);
    let [videoUrl, setVideoUrl] = useState("");

    const fetchData = async () => {
        //proxy to fix cors error
        const proxy = "https://api.allorigins.win/raw?url=";
        const url = "https://ign-apis.herokuapp.com/";

        let videosUrl = "";
        try {
            await fetch(proxy + url, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    // console.log("Here: ", data);
                    videosUrl = data.endpoints[1].sampleRequest;
                });
        } catch (error) {
            console.log("Could not fetch ", error);
        }

        try {
            await fetch(proxy + videosUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Here: ", data);
                    setVideoData(data.data);
                    handleChange(data.data[0].assets[1].url);
                });
        } catch (error) {
            console.log("Could not fetch ", error);
        }
    };
    
    const handleChange = (url) => {
        setVideoUrl(url);
    }   

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <Container fluid className="p-3">
                <Row>
                    <Col md={8} sm={6}>
                        <video
                            className="vd-frame"
                            height="auto"
                            width="100%"
                            controls
                        >
                            {videoData.length && (
                                <source
                                    src={videoUrl}
                                    type="video/mp4"
                                />
                            )}
                        </video>
                    </Col>
                    <Col md={4}>
                        <Stack gap={4}>
                            <Thumbnail />
                            <div className="bg-light border">Second item</div>
                            <div className="bg-light border">Third item</div>
                            <div className="bg-light border">Second item</div>
                            <div className="bg-light border">Third item</div>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Welcome;
