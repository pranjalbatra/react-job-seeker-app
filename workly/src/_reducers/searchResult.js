import { searchConstants } from '../_constants/search';

export function searchResult(state = {}, action) {
    switch (action.type) {
        case searchConstants.GET_LIST_SUCCESS:
            return action.response;
        default:
            return state
    }
}