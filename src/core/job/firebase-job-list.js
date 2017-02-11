import { FirebaseList } from 'src/core/firebase';
import * as jobActions from './actions';
import { Job } from './job';


export const firebaseJobList = new FirebaseList({
  onAdd: jobActions.createJobSuccess,
  onChange: jobActions.updateTaskSuccess,
  onLoad: jobActions.loadTasksSuccess,
  onRemove: jobActions.deleteJobSuccess
}, Job);
