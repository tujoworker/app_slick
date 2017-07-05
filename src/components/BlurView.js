/**
 * Blur effect Component, only to make it nicer to look at
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//load classes and components
import React, { Component } from 'react';
import Blur from 'react-blur';

//CSSTransitionGroup did not work, as we dont know when the blur calculation is complete
// import { CSSTransitionGroup } from 'react-transition-group';
import Config from './../config';

class BlurView extends Component {
    state = {
        view: <div />
    };
    constructor(props) {
        super(props);
        this.url =
            'https://api.themoviedb.org/3/search/movie?api_key=f99ab18fc8db565b4581fbf81f28d90f&query=' +
            encodeURIComponent(this.props.title.replace('C More: ', ''));
    }

    componentDidMount() {
        if (Config.loadBlurImage && this.url) {
            console.log(this.url);
            return fetch(this.url)
                .then(response => response.json())
                .then(this.onSuccess.bind(this))
                .catch(this.onError.bind(this));
        }
    }

    onSuccess(data) {
        console.log(data);
        if (this.imgPath) return;
        try {
            const firstItm = data.results[0];
            this.imgPath =
                'https://image.tmdb.org/t/p/w500' + firstItm.poster_path;

            this.setState({
                view: (
                    <Blur
                        className="blur-view"
                        img={this.imgPath}
                        blurRadius={60}
                        // resizeInterval={1e3}
                    />
                )
            });
        } catch (e) {
            //do not show errer, as there is for sure an errer once no images where found
            // console.error(e);
        }
    }

    onError(e) {
        // console.error(e);
    }

    render() {
        return this.state.view;
        // return (
        //     <div>
        //         <CSSTransitionGroup
        //             transitionName="blur-view-fx"
        //             transitionEnterTimeout={1500}
        //             transitionLeaveTimeout={1300}
        //         >
        //             {this.state.view}
        //         </CSSTransitionGroup>
        //     </div>
        // );
    }
}

export default BlurView;
