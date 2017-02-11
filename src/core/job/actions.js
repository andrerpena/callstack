import { firebaseJobList } from './firebase-job-list';
import {
    CREATE_JOB_ERROR,
    CREATE_JOB_SUCCESS,
    FILTER_JOBS,
    LOAD_JOBS_START,
    LOAD_JOBS_SUCCESS,
    UNLOAD_JOBS_SUCCESS
} from './action-types';

export function createJob(title) {
    return dispatch => {
        firebaseJobList.push({ title })
            .catch(error => dispatch(createJobError(error)));
    };
}

export function createJobError(error) {
    return {
        type: CREATE_JOB_ERROR,
        payload: error
    };
}

export function createJobSuccess(job) {
    return {
        type: CREATE_JOB_SUCCESS,
        payload: job
    };
}

export function loadJobsSuccess(jobs) {
    return {
        type: LOAD_JOBS_SUCCESS,
        payload: jobs
    };
}

export function filterJobs(filterType) {
    return {
        type: FILTER_JOBS,
        payload: { filterType }
    };
}

export function loadJobsStart() {
    return {
        type: LOAD_JOBS_START,
        payload: { }
    };
}

export function loadJobs() {
    return dispatch => {
        dispatch(loadJobsStart());
        // add getState to this function to get the current user
        // const { auth } = getState();
        // taskList.path = `jobs/${auth.id}`;
        firebaseJobList.path = 'jobs';
        firebaseJobList.subscribe(dispatch);
    };
}

export function unloadJobs() {
    firebaseJobList.unsubscribe();
    return {
        type: UNLOAD_JOBS_SUCCESS
    };
}
