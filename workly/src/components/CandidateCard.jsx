import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from '@material-ui/icons'
import commonStyles from '../scss/common.scss';
import { sidebarActions } from '../_actions/sidebar'
import searchStyles from '../scss/search.scss';
import { JobTags } from './JobTags';

class CandidateCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { candidate } = this.props;
        return (
            <div className={searchStyles.card + " card"}>
                <div className="row">
                    <div className="col-md-12">
                        <img src={candidate.profilePic} alt="" className={searchStyles.profilePic} align="middle" />
                        <div className={searchStyles.candidateDetails}>
                            <h3>{candidate.name}</h3>
                            <h5>
                                {
                                    candidate.role
                                }
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            candidate.achievements.map((achievement) => (
                                <img src={achievement.img} alt="" />
                            ))
                        }
                        <JobTags tags={candidate.tags} />
                        <p className={searchStyles.description}>
                            {candidate.description}
                        </p>
                        <Link className={searchStyles.searchCTA} to={"profile/" + candidate.username}>
                            View Profile
                        </Link>
                    </div>
                </div>

            </div>
        );
    }

}


function mapState(state) {
    return {};
}

const actionCreators = {
};

const connectedCandidateCard = connect(mapState, actionCreators)(CandidateCard);
export { connectedCandidateCard as CandidateCard };