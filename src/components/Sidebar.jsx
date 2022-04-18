import React, {useContext} from "react";
import { Col, Row,} from "react-bootstrap";
import { VideoContext } from "../context/VideoContext";

const Thumbnail = (
        {   
            contentId,
            assets,
            thumbnails,
            metadata,
        }
) => {
    const { getMainVideo } = useContext(VideoContext);
    return (
        <div className="bg-light">
            <Row className="cursor-pointer" onClick={()=>getMainVideo(contentId)} >
                <Col lg={5} md="auto" sm={6} xs={6} className="img-frame pl-0">
                    <img 
                        width="100%" 
                        height="fit-content(20em)"   
                        className="thumbnail" src={thumbnails[1].url} />
                    <div className="bottom-right">
                        <p className="p-1">3:45</p>
                    </div>
                </Col>
                <Col lg={7} md="auto" sm={6} xs={6} className="pt-2">
                    <p className="pr-2">
                        {
                            metadata.title.length > 49 ?
                            metadata.title.slice(0,48) + "..."
                            : metadata.title
                        }
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default Thumbnail;
