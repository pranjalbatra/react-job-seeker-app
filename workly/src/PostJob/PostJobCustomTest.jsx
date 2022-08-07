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

class PostJobCustomTest extends React.Component {
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
                                <h2 className={jobStyles.heading}>4. Would you want the applicant to clear some customized tests created by you?</h2>
                                <Row className={jobStyles.jobTypeContainer}>
                                    <Col md={12} className={commonStyles.margin_defult}>
                                        <button className={`${commonStyles.primaryButtonBlue} ${commonStyles.iconButton}`}>
                                            Create New
                                            <AddCircleOutline></AddCircleOutline>
                                        </button>
                                    </Col>
                                    <Col md={6} className={commonStyles.margin_defult}>
                                        <ul className={jobStyles.testList}>
                                            <li>
                                                En - TOYOTA ENGLISH
                                                <AddCircleOutline></AddCircleOutline>
                                            </li>
                                            <li className={jobStyles.selectedTest}>
                                                Test Tile
                                                <AddCircleOutline></AddCircleOutline>
                                            </li>
                                            <li>
                                                Test Tile
                                                <AddCircleOutline></AddCircleOutline>
                                            </li>
                                        </ul>
                                    </Col>

                                </Row>
                                <Link to='/post-job/location'>
                                    <button className={jobStyles.actionButton}>
                                        Next
                                    </button>
                                </Link>

                            </Col>
                            <Col md={4}>
                                <ProgressList active={3} />
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

const connectedPostJobCustomTest = connect(mapState, actionCreators)(PostJobCustomTest);
export { connectedPostJobCustomTest as PostJobCustomTest };