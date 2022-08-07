import React, { useState } from 'react';
import { connect } from 'react-redux';
import storyStyles from '../scss/story.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const StoryItem = ({ story }) => {
    const [storyPopup, toggleStory] = useState(false);

    return (
        <>
            <div className={storyStyles.container}>
                <img src={story.image} alt="" className={storyStyles.profilePic} align="middle" onClick={() => toggleStory(true)} />
            </div>
            <div className={(storyPopup ? storyStyles.show : storyStyles.hide) + ` ${storyStyles.fullBodyNoScroll} text-center`}>
                <button type="button" className="close" aria-label="Close" onClick={() => toggleStory(false)}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <Row className={storyStyles.storyContainer}>
                    <Col md={{ offset: 4, span: 4 }}>
                        <p>Showing Results for</p>
                        <p className={storyStyles.subTitle}>{story.jobProfile} in {story.location}</p>
                        <Row className={storyStyles.videoContainer}>
                            <Col md={12}>
                                <Row className={storyStyles.topbarBanner}>
                                    <Col xs={2}>
                                        <img src={story.image} alt="" width="50" height="50" className={storyStyles.storyPic} />
                                    </Col>
                                    <Col className="text-left" xs={10}>
                                        <h4> {story.name} </h4>
                                        <h5> {story.jobProfile} </h5>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={12} className={storyStyles.videoContent}>
                                <video src={story.video} controls></video>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
        </>
    )
}



function mapState(state) {
    return state;
}

const actionCreators = {
};

const connectedStoryItem = connect(mapState, actionCreators)(StoryItem);
export { connectedStoryItem as StoryItem };