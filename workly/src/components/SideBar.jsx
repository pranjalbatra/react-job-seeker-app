import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import dashboardStyles from '../scss/dashboard.scss';
import commonStyles from '../scss/common.scss';
import { sidebarActions } from '../_actions/sidebar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.dashboardItems = [
            {
                name: 'Dashboard',
                slug: 'dashboard',
                href: "/"
            },
            {
                name: 'Search',
                slug: 'search',
                href: "/search"
            },
            {
                name: 'My Jobs',
                slug: 'my-jobs',
                href: "/jobs"
            },
            {
                name: 'Inbox',
                slug: 'inbox',
                href: "/inbox"
            },
            {
                name: 'Company Profile',
                slug: 'company-profile',
                href: "/company-profile"
            }
        ]

        this.toggle = this.toggle.bind(this);
    }

    toggle(state) {
        if (state == 'close') {
            this.props.toggle(false);
        } else {
            this.props.toggle(true);
        }
    }
    render() {
        const { selected, sidebar = {} } = this.props;
        console.log({ selected });
        return (
            <div className={sidebar.state == 'open' ? `${dashboardStyles.sidebar}` : `${dashboardStyles.sidebarClosed} ${dashboardStyles.sidebar}`}>
                <Row>
                    <Col md={3}>
                        <button type="button" className="close" aria-label="Close" onClick={() => this.toggle(sidebar.state)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Col>
                    <Col md={9}>
                        <img src="/assets/randomLogo.png" alt="" width="150" height="150" className={dashboardStyles.logo} />
                    </Col>
                </Row>
                <ul>
                    {
                        this.dashboardItems.map((item) => (
                            <Link to={item.href} className={dashboardStyles.link} onClick={() => this.toggle(sidebar.state)}>
                                <li className={selected == item.slug ? `${dashboardStyles.active} ${dashboardStyles.sidebarItem}` : `${dashboardStyles.sidebarItem}`} >
                                    <img src="/assets/randomLogo.png" alt="" className={commonStyles.iconImage} />
                                    {item.name}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
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

const connectedSideBar = connect(mapState, actionCreators)(SideBar);
export { connectedSideBar as SideBar };