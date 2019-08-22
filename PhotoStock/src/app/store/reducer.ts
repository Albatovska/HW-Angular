import actions from './actions';

const { ADD } = actions;

export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD:
            return [ ...state, action.payload ];

        default:
            return state;

    }
}
