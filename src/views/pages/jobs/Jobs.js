import { List } from 'immutable';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { JobSearch, JobList } from '../../components';

import { getJobFilter, getVisibleJobs, jobsActions } from 'src/core/job';


export class Jobs extends Component {
    static propTypes = {
        createJob: PropTypes.func.isRequired,
        filterJobs: PropTypes.func.isRequired,
        filterType: PropTypes.string.isRequired,
        jobs: PropTypes.instanceOf(List).isRequired,
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
        let { jobs } = this.props;
        return (
            <div>
                <JobSearch />
                <JobList jobs={jobs} />
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
    (filterType, jobs) => ({
        filterType,
        jobs
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
