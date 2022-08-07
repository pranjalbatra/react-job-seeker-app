import { sidebarConstants } from '../_constants/sidebar';

export function sidebar(state = {}, action) {
    switch (action.type) {
        case sidebarConstants.OPEN:
            return {
                state: 'open'
            };
        case sidebarConstants.CLOSE:
            return {
                state: 'close'
            };
        default:
            return state
    }
}