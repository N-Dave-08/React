import { ACTION_TYPES } from "./postActionTypes";

export const postReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.INCREMENT:
            return { count: state.count + 1 };
        case ACTION_TYPES.DECREMENT:
            return { count: state.count - 1 };
        case ACTION_TYPES.RESET:
            return { count: state.count = 0 };
        default:
            throw new Error(`Something went wrong`);
    }
}