import React, { Component } from 'react';
import { InputGroup, Button, InputGroupButton, Input } from 'reactstrap';

export class JobSearch extends Component {
    render() {
        return (
            <div className="job-search-wrapper">
                <div className="job-search">
                    <InputGroup size="lg">
                        <Input placeholder="Your dev job search starts here..." />
                        <InputGroupButton>
                            <Button color="secondary">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                Search
                            </Button>
                        </InputGroupButton>
                        <InputGroupButton>
                            <Button color="secondary">
                                <i className="fa fa-plus" aria-hidden="true"></i>
                                Post a job
                            </Button>
                        </InputGroupButton>
                    </InputGroup>

                </div>
                <div className="filters">
                </div>
            </div>
        );
    }
}
