import * as ActionTypes from './actionTypes';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import ServiceComponent from '../components/index';

const mapStateToProps = (state) => ({
    isLoading: state.serviceReducer.isLoading,
    error: state.serviceReducer.error,
    data: state.serviceReducer.data
});

const mapDispatchToProps = (dispatch) => ({
    callService: () => dispatch(callWebservice())
});

export const callWebservice = () => {
    return dispatch => {
        dispatch(serviceActionPending());
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fdantri.com.vn%2Ftrangchu.rss')
            .then(response => {
                console.log(response);
                dispatch(serviceActionSuccess(response.data.items))
            })
            .catch(error => {
                dispatch(serviceActionError(error))
            });
    }
};

export const serviceActionPending = () => ({
    type: ActionTypes.SERVICE_PENDING
});

export const serviceActionError = (error) => ({
    type: ActionTypes.SERVICE_ERROR,
    error: error
});

export const serviceActionSuccess = (data) => ({
    type: ActionTypes.SERVICE_SUCCESS,
    data: data
});

export default connect(mapStateToProps, mapDispatchToProps)(ServiceComponent);
