import React from 'react';
import { connect } from 'react-redux';
import { SideBar } from '../components/SideBar'
import { CandidateCard } from '../components/CandidateCard'
import { StoryItem } from '../components/StoryItem'

import { PrivateAd } from '../components/PrivateAd'
import { Topbar } from '../components/Topbar'
import { searchActions } from '../_actions/search'
import dashboardStyles from '../scss/dashboard.scss';
import searchStyles from '../scss/search.scss';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.getCandidates({ page: 0 });
    }
    render() {
        const { searchResult = {}, sidebar } = this.props;
        return (
            <Row className={dashboardStyles.dashboard}>
                <SideBar selected="search"></SideBar>
                <Topbar header="Search"></Topbar>
                <div className={`${dashboardStyles.contentWide} ${dashboardStyles.content}`}>
                    <Row>
                        <Col lg={9}>
                            <div className={searchStyles.searchHeader}>
                                <h4 className={searchStyles.heading}>Tell us who you're looking for?</h4>
                                <p className={searchStyles.desc}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, </p>
                            </div>
                            <div className={searchStyles.storySection}>
                                {searchResult.stories &&
                                    searchResult.stories.map((item) => (
                                        <StoryItem story={item} />
                                    ))
                                }
                            </div>
                            {searchResult.results &&
                                searchResult.results.map((item) => (
                                    <CandidateCard candidate={item} />
                                ))
                            }
                        </Col>
                        <Col lg={3}>
                            <PrivateAd />
                        </Col>
                    </Row>
                </div>
            </Row>

        );
    }

}


function mapState(state) {
    const { searchResult, sidebar } = state;
    return { searchResult, sidebar };
}

const actionCreators = {
    getCandidates: searchActions.getList,
}

const connectedSearchPage = connect(mapState, actionCreators)(SearchPage);
export { connectedSearchPage as SearchPage };