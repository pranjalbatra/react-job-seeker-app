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
import Form from 'react-bootstrap/Form'
import { ProgressList } from './components/ProgressList';
import Autocomplete from '../components/AutoComplete';

class PostJobDetails extends React.Component {
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
                                <h2 className={jobStyles.heading}>2. Tell us more about this job?</h2>
                                <Row className={jobStyles.jobTypeContainer}>
                                    <Col md={12} className={commonStyles.margin_defult}>
                                        <div className={jobStyles.fileButtonWrapper}>
                                            <button className={`${commonStyles.primaryButtonBlue} ${commonStyles.iconButton}`}>
                                                ADD FILES, IMAGES, VIDEOS
                                            <AddCircleOutline></AddCircleOutline>
                                            </button>
                                            <input type="file" name="myfile" />
                                        </div>
                                    </Col>
                                    <Col md={12} className={commonStyles.margin_defult}>
                                        <Form.Control as="textarea" rows="3" placeholder="ADD A DESCRIPTION" />
                                    </Col>
                                    <Col md={12} className={commonStyles.margin_defult}>
                                        <FormText className={commonStyles.capitalBold}>ADD SKILLS REQUIRED</FormText>
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
                                        <FormText className={commonStyles.capitalBold}>ADD A CHECKLIST (OPTIONAL)</FormText>
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
                                <Link to='/post-job/tests'>
                                    <button className={jobStyles.actionButton}>
                                        Next
                                    </button>
                                </Link>

                            </Col>
                            <Col md={4}>
                                <ProgressList active={1} />
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

const connectedPostJobDetails = connect(mapState, actionCreators)(PostJobDetails);
export { connectedPostJobDetails as PostJobDetails };