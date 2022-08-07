import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddCircleOutline } from '@material-ui/icons'
import dashboardStyles from '../scss/dashboard.scss';
import jobStyles from '../scss/postjob.scss';
import commonStyles from '../scss/common.scss';
import { SideBar } from '../components/SideBar'
import { Topbar } from '../components/Topbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { ProgressList } from './components/ProgressList';

class PostJobAutoAction extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { sidebar } = this.props;
        return (
            <Row className={dashboardStyles.dashboard}>
                <SideBar selected=""></SideBar>
                <Topbar header="ABCD"></Topbar>
                <div className={`${dashboardStyles.contentWide} ${dashboardStyles.content} ${commonStyles.darkBackground}`}>
                    <div className={`${jobStyles.postJob}`}>
                        <Row className={jobStyles.mainContainer}>
                            <Col md={8}>
                                <h2 className={jobStyles.heading}>6.Add automatic actions to incoming applications.</h2>
                                <Row className={jobStyles.jobTypeContainer}>
                                    <Col md={12} className={commonStyles.margin_defult}>
                                        <Form>
                                            <Form.Check
                                                type="switch"
                                                id="custom-switch"
                                                label="AUTO SHORTLIST"
                                            />
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur </p>
                                            <h5>MINIMUM SCORE REQUIRED ( AVG )</h5>
                                            <Form.Check
                                                disabled
                                                type="switch"
                                                label="disabled switch"
                                                id="disabled-custom-switch"
                                            />
                                        </Form>

                                    </Col>
                                </Row>
                                <div className={jobStyles.rightBottomImage} style={{ backgroundImage: `url('/assets/job-location/location.png')` }}>

                                </div>
                                <Link to='/post-job/auto-actions'>
                                    <button className={jobStyles.actionButton}>
                                        Next
                                    </button>
                                </Link>

                            </Col>
                            <Col md={4}>
                                <ProgressList active={5} />
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

const connectedPostJobAutoAction = connect(mapState, actionCreators)(PostJobAutoAction);
export { connectedPostJobAutoAction as PostJobAutoAction };