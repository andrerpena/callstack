import { List } from 'immutable';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { JobList, JobSearch } from '../../components';
import JobsLoading from './JobsLoading';

import { getJobFilter, getVisibleJobs, getJobsLoading, jobsActions } from 'src/core/job';


export class Jobs extends Component {
    static propTypes = {
        createJob: PropTypes.func.isRequired,
        filterJobs: PropTypes.func.isRequired,
        filterType: PropTypes.string.isRequired,
        jobs: PropTypes.instanceOf(List).isRequired,
        jobsLoading: PropTypes.bool.isRequired,
        loadJobs: PropTypes.func.isRequired,
        location: PropTypes.object.isRequired,
        unloadJobs: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.props.loadJobs();
        this.props.filterJobs(this.props.location.query.filter);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.query.filter !== this.props.location.query.filter) {
            this.props.filterJobs(nextProps.location.query.filter);
        }
    }

    componentWillUnmount() {
        this.props.unloadJobs();
    }

    render() {
        let { jobs, jobsLoading } = this.props;
        let jobsLoadingBox = jobsLoading ? <JobsLoading /> : null;
        let jobList = jobs ? <JobList jobs={jobs} /> : null;
        return (
            <div>
                <JobSearch />
                {jobsLoadingBox}
                {jobList}
            </div>
        );
    }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
    getJobFilter,
    getVisibleJobs,
    getJobsLoading,
    (filterType, jobs, jobsLoading) => ({
        filterType,
        jobs,
        jobsLoading
    })
);

const mapDispatchToProps = Object.assign(
    {},
    jobsActions
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Jobs);
