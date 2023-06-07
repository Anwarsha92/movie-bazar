import axios from "axios";
import { FAIL, SUCCESS } from "../constants/dataConstants";


export const getMovies = async (dispatch) => {
    try {
        const {data} = await axios.get('/restaurants.json')

        console.log(data.restaurants);

        dispatch(
            {
                payload:data.restaurants,
                type: SUCCESS
            }
        )

    }
    catch (err) {
        dispatch(
            {
                payload: err,
                type: FAIL
            }
        )

    }
}