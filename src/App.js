/**
 * App logic
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//load classes and components
import React, { Component } from 'react';
import Fetch from 'react-fetch';

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
            content: <ErrorView text={error.message} />
        });
    }

    //fetch first tata form the APIURL and later show it in "content"
    render() {
        return (
            <div>
                {this.state.content}
                <Fetch
                    url={Config.APIURL}
                    onSuccess={this.onSuccess.bind(this)}
                    onError={this.onError.bind(this)}
                />
            </div>
        );
    }
}
