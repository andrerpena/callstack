import React, { PropTypes, Component } from 'react';
import { List } from 'immutable';

export class JobList extends Component {
    static propTypes = {
        jobs: PropTypes.instanceOf(List).isRequired
    }
    render() {
        let { jobs } = this.props;
        return (
            <div className="job-list-wrapper">
                {
                    jobs.map((j, i) => <div key={i}>{j.title}</div>)
                }
            </div>
        );
    }
}
