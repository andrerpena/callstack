import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { authActions, getAuth } from 'src/core/auth';
import { paths } from '../routes';
import { Header } from '../components';


export class App extends Component {
    static contextTypes = {
        router: React.PropTypes.object.isRequired
    };

    static propTypes = {
        auth: PropTypes.object.isRequired,
        children: PropTypes.object.isRequired,
        signOut: PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
        const { router } = this.context;
        const { auth } = this.props;

        if (auth.authenticated && !nextProps.auth.authenticated) {
            router.replace(paths.SIGN_IN);
        }
        else if (!auth.authenticated && nextProps.auth.authenticated) {
            router.replace(paths.TASKS);
        }
    }

    render() {
        return (
            <div>
                <Header
                    authenticated={this.props.auth.authenticated}
                    signOut={this.props.signOut}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <main className="main">
                                {this.props.children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
    getAuth,
    auth => ({ auth })
);

export default connect(
    mapStateToProps,
    authActions
)(App);
