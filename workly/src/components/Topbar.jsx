import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from '@material-ui/icons'
import dashboardStyles from '../scss/dashboard.scss';
import commonStyles from '../scss/common.scss';
import { sidebarActions } from '../_actions/sidebar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Topbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
    }

    toggle(state) {
        if (state == 'open') {
            this.props.toggle(true);
        } else {
            this.props.toggle(false);
        }
    }
    render() {
        const { header, sidebar } = this.props;
        return (
            <div className={`${dashboardStyles.topbarWide} ${dashboardStyles.topbar}`}>
                <Row>
                    <Col md={4}>
                        <Row>
                            <Col md={2} style={{ minHeight: '70px', background: '#222' }}>
                                <Menu style={{ fontSize: 30, color: '#fff', marginTop: 20 }} onClick={() => this.toggle(sidebar.state)} />
                            </Col>
                            <Col md={8}>
                                <h2>{header}</h2>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="text-right" md={8}>
                        <Link to="/post-job">
                            <button className={`${commonStyles.primaryButton} ${dashboardStyles.postJob}`}>Post a Job</button>
                        </Link>
                        <img src="" alt="" className={commonStyles.iconImage} />
                        <img src="" alt="" className={commonStyles.iconImage} />
                    </Col>
                </Row>

            </div>
        );
    }

}


function mapState(state) {
    const { sidebar } = state;
    return { sidebar };
}

const actionCreators = {
    toggle: sidebarActions.toggle
};

const connectedTopbar = connect(mapState, actionCreators)(Topbar);
export { connectedTopbar as Topbar };