import React from 'react';
import { connect } from 'react-redux';
import dashboardStyles from '../scss/dashboard.scss';
import profileStyles from '../scss/profile.scss';
import commonStyles from '../scss/common.scss';
import { SideBar } from '../components/SideBar'
import { Topbar } from '../components/Topbar'
import { profileActions } from '../_actions/profile'
import { StoryItem } from '../components/StoryItem';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { JobTags } from '../components/JobTags';
import { Reviews } from '../components/Reviews';
import { common } from '@material-ui/core/colors';


class ProfilePage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params);
        this.props.getCandidate({ page: 0 });
    }
    render() {
        const { sidebar, candidate = {} } = this.props;
        return (
            <Row className={dashboardStyles.dashboard}>
                <SideBar selected=""></SideBar>
                <Topbar header={candidate.name}></Topbar>
                <div className={`${dashboardStyles.contentWide} ${dashboardStyles.content}`}>
                    <Row>
                        <Col md={12} className='text-center'>
                            {
                                candidate.story &&
                                <>
                                    <StoryItem story={candidate.story} />
                                    <div className={profileStyles.basicDetails}>
                                        <h3>
                                            {candidate.name}
                                            <span>
                                                {candidate.location}
                                            </span>
                                        </h3>
                                        <h4>
                                            {candidate.jobProfile}
                                        </h4>
                                        <Row>
                                            <Col xs={4}>
                                                <h4 className={profileStyles.phone}>
                                                    {candidate.phone}
                                                </h4>
                                            </Col>
                                            <Col xs={{ span: 4, offset: 4 }}>
                                                <h4 className={profileStyles.email}>
                                                    {candidate.email}
                                                </h4>
                                            </Col>
                                        </Row>
                                        <Button className={profileStyles.hireMe}>Hire Me</Button>
                                    </div>
                                    <Row>
                                        <Col xs={{ span: 6, offset: 3 }}>
                                            <p>{candidate.description}</p>
                                            <JobTags tags={candidate.tags} />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={{ span: 6, offset: 3 }}>
                                            <h4 className={commonStyles.heading}>BADGES AND TESTS EARNED</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={{ span: 6, offset: 3 }}>
                                            <h4 className={commonStyles.heading}>CLIENT REVIEWS</h4>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col xs={{ span: 6, offset: 3 }}>
                                            <Reviews reviews={candidate.reviews}>

                                            </Reviews>
                                        </Col>
                                    </Row>
                                </>
                            }
                        </Col>
                    </Row>
                </div>
            </Row>
        );
    }

}


function mapState(state) {
    const { sidebar, candidate } = state;
    return { sidebar, candidate };
}

const actionCreators = {
    getCandidate: profileActions.getCandidate
}

const connectedProfile = connect(mapState, actionCreators)(ProfilePage);
export { connectedProfile as ProfilePage };