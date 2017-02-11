import { FirebaseList } from 'src/core/firebase';
import * as jobActions from './actions';
import { Job } from './job';


export const firebaseJobList = new FirebaseList({
    onAdd: jobActions.createJobSuccess,
    onLoad: jobActions.loadJobsSuccess,
    path: '/jobs'
}, Job);
