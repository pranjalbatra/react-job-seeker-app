import { sidebarConstants } from '../_constants/sidebar';

export const sidebarActions = {
    toggle
};

function toggle(state) {
    if (state) {
        return { type: sidebarConstants.CLOSE, state };
    } else {
        return { type: sidebarConstants.OPEN, state };
    }
}