import { List, Record } from 'immutable';

import {
    SIGN_OUT_SUCCESS
} from 'src/core/auth';

import {
    CREATE_JOB_SUCCESS,
    FILTER_JOBS,
    LOAD_JOBS_START,
    LOAD_JOBS_SUCCESS
} from './action-types';

export const JobsState = new Record({
    loading: false,
    filter: '',
    list: new List()
});

export function jobsReducer(state = new JobsState(), {payload, type}) {
    switch (type) {
        case CREATE_JOB_SUCCESS:
            return state.merge({
                list: state.list.unshift(payload)
            });

        case FILTER_JOBS:
            return state.set('filter', payload.filterType || '');

        case LOAD_JOBS_START:
            return state.set('loading', true);

        case LOAD_JOBS_SUCCESS:
            return state.merge({
                loading: false,
                list: new List(payload.reverse())
            });

        case SIGN_OUT_SUCCESS:
            return new JobsState();

        default:
            return state;
    }
}
