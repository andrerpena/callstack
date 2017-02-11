import React, { Component } from 'react';
import { InputGroup, InputGroupButton, Input } from 'reactstrap';

export default class JobSearch extends Component {
    render() {
        return (
            <div className="job-search-wrapper">
                <div className="job-search">
                    <InputGroup size="lg" inline>
                        <Input placeholder="Your dev job search starts here..." />
                        <InputGroupButton color="secondary">Search</InputGroupButton>
                        <InputGroupButton color="secondary">Post a job</InputGroupButton>
                    </InputGroup>

                </div>
                <div className="filters">
                </div>
            </div>
        );
    }
}
