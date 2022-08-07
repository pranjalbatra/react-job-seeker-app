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
import FormText from 'react-bootstrap/FormText'
import { ProgressList } from './components/ProgressList';
import Autocomplete from '../components/AutoComplete';

class PostJobTests extends React.Component {
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
                                <h2 className={jobStyles.heading}>3. What all badges / tests should the applicants clear before applying to this job ?</h2>
                                <Row className={jobStyles.jobTypeContainer}>
                                    <Col md={12} className={commonStyles.margin_defult}>
                                        <FormText className={commonStyles.capitalBold}>3.1 ADD A Badge</FormText>
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
                                    <Col md={12} className={commonStyles.margin_defult}>
                                        <FormText className={commonStyles.capitalBold}>3.1 ADD Tests</FormText>
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
                                <Link to='/post-job/custom-test'>
                                    <button className={jobStyles.actionButton}>
                                        Next
                                    </button>
                                </Link>

                            </Col>
                            <Col md={4}>
                                <ProgressList active={2} />
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

const connectedPostJobTests = connect(mapState, actionCreators)(PostJobTests);
export { connectedPostJobTests as PostJobTests };