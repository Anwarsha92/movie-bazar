import { FAIL, SUCCESS } from "../constants/dataConstants";


export const dataReducer = (state = { movieList: [] }, action) => {

    switch (action.type) {
        case SUCCESS:

            return {
                movieList: action.payload
            }

            

        case FAIL:

            return {
                movieList: action.payload
            }

        default:
            return state

    }
}