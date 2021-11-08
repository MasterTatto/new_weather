import axios from "axios";

const initialState = {
    data: {},
    errorMessage: null,
}

export const weather = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEATHER': {
            return {
                ...state,
                data: {...action.data}
            }
        }

        case 'SET_ERROR' : {
            return {
                ...state, errorMessage: action.error
            }
        }

        default:
            return state
    }
}

const setWeather = (data) => {
    return {
        type: 'SET_WEATHER', data
    }
}

const setError = (error) => {
    return {
        type: 'SET_ERROR', error
    }
}

export const setWeatherTC = (title) => (dispatch) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${title}&appid=460af259479a2574e456a34ffff0205c&units=metric`)
        .then((res) => {
            dispatch(setWeather(res.data))
            dispatch(setError(null))
        })
        .catch((err) => {
            dispatch(setWeather(null, null))
            dispatch(setError(err.response.data.message))
        })
}


