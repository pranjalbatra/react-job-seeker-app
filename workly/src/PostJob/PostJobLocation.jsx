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
import { ProgressList } from './components/ProgressList';
import Autocomplete from '../components/AutoComplete';

class PostJobLocation extends React.Component {
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
                                <h2 className={jobStyles.heading}>5. Add one of more locations to the Job?</h2>
                                <Row className={jobStyles.jobTypeContainer}>
                                    <Col md={12} className={commonStyles.margin_defult}>
                                        <Autocomplete
                                            suggestions={[
                                                "Alligator",
                                                "Bask",
                                                "Crocodilian",
                                                "Death Roll",
                                                "Eggs",
                                                "Jaws",
                                                "Reptile",
                                                "Solitary",
                                                "Tail",
                                                "Wetlands"
                                            ]}
                                        />

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
                                <ProgressList active={4} />
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

const connectedPostJobLocation = connect(mapState, actionCreators)(PostJobLocation);
export { connectedPostJobLocation as PostJobLocation };