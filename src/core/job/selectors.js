import { createSelector } from 'reselect';


export function getJobs(state) {
    return state.jobs;
}

export function getJobList(state) {
    return getJobs(state).list;
}

export function getJobsLoading(state) {
    return getJobs(state).loading;
}

export function getJobFilter(state) {
    return getJobs(state).filter;
}

export function getDeletedJob(state) {
    return getJobs(state).deleted;
}

/**
 * Filters the list of jobs based on the given filter.
 * @param {any} jobs The jobs to filter
 * @param {string} filter The string filter to apply
 * @returns The filtered job list
 */
function filterJobs(jobs, filter) {
    let finalFilter = filter ? filter.trim().toLowerCase() : '';
    return jobs.filter(job => job.title.toLowerCase().includes(finalFilter));
}

//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleJobs = createSelector(
  getJobList,
  getJobFilter,
  (jobs, filter) => {
      if (filter)
          return filterJobs(jobs, filter);
      return jobs;
  }
);
