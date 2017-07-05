/**
 * App logic
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//load classes and components
import React, { Component } from 'react';

import Slider from './components/Slider';
import { LoadingView, ErrorView } from './components/StatusViews';

import './css/app.scss';
import Config from './config';

//main app class
export default class App extends Component {
    constructor(props) {
        super(props);

        //once the user visits the page, show this first
        this.state = { content: <LoadingView text="Loading data ..." /> };
    }

    componentDidMount() {
        return (
            fetch(Config.APIURL, {
                method: 'GET',
                headers: {
                    Accept: 'application/json'
                }
            })
                .then(response => response.json())
                .then(this.onSuccess.bind(this))
                .catch(this.onError.bind(this))
        );
    }

    onSuccess(data) {
        try {
            this.setState({
                content: <Slider data={data} />
            });
        } catch (e) {
            this.setState({
                content: <ErrorView text={e.message} />
            });
        }
    }

    onError(error) {
        this.setState({
            statesView: <ErrorView text={error.message} />
        });
    }

    render() {
        return (
            <div>
                {this.state.content}
            </div>
        );
    }
}
