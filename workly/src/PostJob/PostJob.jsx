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
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class PostJob extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { sidebar } = this.props;
        return (
            <Row className={dashboardStyles.dashboard}>
                <SideBar selected=""></SideBar>
                <Topbar header="Create a Job Post"></Topbar>
                <div className={`${dashboardStyles.contentWide} ${dashboardStyles.content}`}>
                    <div className={`${jobStyles.postJob} text-center`}>
                        <Row>
                            <Col md={{ offset: 2, span: 8 }} className={jobStyles.postJobEntryContainer}>
                                <h2>Tell us what you need done?</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, </p>
                                <h4>WHAT POSITION ARE YOU RECRUITING FOR?</h4>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Job Title"
                                        aria-label="JobTitle"
                                        aria-describedby="basic-addon1"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <div className={jobStyles.bottomImage} style={{ backgroundImage: `url('/assets/job-announcement.png')` }}>
                            <Link to='/post-job/type/abcd'>
                                <button className={`${commonStyles.primaryButtonBlue} ${jobStyles.cta}`}>Start</button>
                            </Link>

                        </div>
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

const connectedPostJob = connect(mapState, actionCreators)(PostJob);
export { connectedPostJob as PostJob };