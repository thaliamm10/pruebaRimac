// dataReducer.ts
import { ADD_DATA } from './PlansActions';

const initialState = {
    data: [],
};

const PlansReducer = (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                data: [...state.data, action.payload],
            };
        default:
            return state;
    }
};

export default PlansReducer;
