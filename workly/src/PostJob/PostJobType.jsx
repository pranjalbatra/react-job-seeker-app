import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import dashboardStyles from '../scss/dashboard.scss';
import jobStyles from '../scss/postjob.scss';
import commonStyles from '../scss/common.scss';
import { SideBar } from '../components/SideBar'
import { Topbar } from '../components/Topbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ProgressList } from './components/ProgressList';

class PostJobType extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { sidebar } = this.props;
        return (
            <Row className={`${dashboardStyles.dashboard}`}>
                <SideBar selected=""></SideBar>
                <Topbar header="ABCD"></Topbar>
                <div className={`${dashboardStyles.contentWide} ${dashboardStyles.content} ${commonStyles.darkBackground}`}>
                    <div className={`${jobStyles.postJob}`}>
                        <Row className={jobStyles.mainContainer}>
                            <Col md={9}>
                                <h2 className={jobStyles.heading}>1. What type of a job is this?</h2>
                                <Row className={jobStyles.jobTypeContainer}>
                                    <Col md={3}>
                                        <div className="jobTile">
                                            <img src="/assets/job-type/fullTime.png">
                                            </img>
                                            <h5>Full Time</h5>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="jobTile">
                                            <img src="/assets/job-type/partTime.png">
                                            </img>
                                            <h5>Part Time</h5>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="jobTile">
                                            <img src="/assets/job-type/freelancer.png">
                                            </img>
                                            <h5>Free lancer</h5>
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <div className="jobTile">
                                            <img src="/assets/job-type/internship.png">
                                            </img>
                                            <h5>Internship</h5>
                                        </div>
                                    </Col>
                                </Row>
                                <Link to='/post-job/details'>
                                    <button className={jobStyles.actionButton}>
                                        Next
                                    </button>
                                </Link>
                            </Col>
                            <Col md={3}>
                                <ProgressList active={0} />
                            </Col>
                        </Row>

                    </div>
                </div>
            </Row>
        );
    }

}


function mapState(state) {
    const { sidebar } = state;
    return { sidebar };
}

const actionCreators = {
}

const connectedPostJobType = connect(mapState, actionCreators)(PostJobType);
export { connectedPostJobType as PostJobType };