import * as LocationAPIUtil from '../util/geolocation_util';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_LOCATION_ERRORS = 'RECEIVE_LOCATION_ERRORS'

export const receiveLocation = location => {
    return {
        type: RECEIVE_LOCATION,
        location
    }
}

const receiveLocationErrors = errors => {
    return {
        type: RECEIVE_LOCATION_ERRORS,
        errors
    }   
};

export const fetchLocation = (zipCode) => dispatch => {
    return LocationAPIUtil.fetchLocation(zipCode).then(
        location => dispatch(receiveLocation(location),
        errors => {
            dispatch(receiveLocationErrors(errors.responseJSON))
        })
    )
};