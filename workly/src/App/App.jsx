import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers/history';
import { alertActions } from '../_actions/alert';
import { Dashboard } from '../Dashboard/Dashboard'
import { SearchPage } from '../SearchPage/SearchPage'
import { ProfilePage } from '../ProfilePage/ProfilePage'
import { PostJob } from '../PostJob/PostJob';
import { PostJobType } from '../PostJob/PostJobType';
import { PostJobTests } from '../PostJob/PostJobTests';
import { PostJobCustomTest } from '../PostJob/PostJobCustomTest';
import { PostJobDetails } from '../PostJob/PostJobDetails';
import { PostJobLocation } from '../PostJob/PostJobLocation';
import { PostJobAutoAction } from '../PostJob/PostJobAutoAction';

class App extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="row">
                <div className="col-sm-12">
                    {alert.message &&
                        <div className={`alert ${alert.type}`} style={{ marginBottom: 0 }}>
                            <div className="row">
                                <div className="col-sm-11">
                                    {alert.message}
                                </div>
                                <div className="col-sm-1">
                                    <button onClick={this.props.clearAlerts}>X</button>
                                </div>
                            </div>
                        </div>
                    }
                    <Router history={history}>
                        <div>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/search" component={SearchPage} />
                            <Route exact path="/post-job" component={PostJob} />
                            <Route exact path="/post-job/details" component={PostJobDetails} />
                            <Route exact path="/post-job/tests" component={PostJobTests} />
                            <Route exact path="/post-job/custom-test" component={PostJobCustomTest} />
                            <Route exact path="/post-job/location" component={PostJobLocation} />
                            <Route exact path="/post-job/auto-actions" component={PostJobAutoAction} />
                            <Route path="/post-job/type/:type" component={PostJobType} />
                            <Route exact path="/profile/:username" component={ProfilePage} />
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { alert } = state;
    return { alert };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };