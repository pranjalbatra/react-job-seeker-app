import { profileConstants } from '../_constants/profile';

export function candidate(state = {}, action) {
    switch (action.type) {
        case profileConstants.GET_CANDIDATE_SUCCESS:
            return action.response;
        default:
            return state
    }
}