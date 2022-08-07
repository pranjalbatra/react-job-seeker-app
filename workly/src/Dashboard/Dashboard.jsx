import React from 'react';
import { connect } from 'react-redux';
import dashboardStyles from '../scss/dashboard.scss';
import { SideBar } from '../components/SideBar'
import { Topbar } from '../components/Topbar'
import Row from 'react-bootstrap/Row'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { sidebar } = this.props;
        return (
            <Row className={dashboardStyles.dashboard}>
                <SideBar selected="dashboard"></SideBar>
                <Topbar header="Dashboard"></Topbar>
                <div className={sidebar.state == 'close' ? dashboardStyles.topbarWide : dashboardStyles.topbarNarrow}>

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

const connectedDashboard = connect(mapState, actionCreators)(Dashboard);
export { connectedDashboard as Dashboard };