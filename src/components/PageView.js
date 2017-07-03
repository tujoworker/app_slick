/**
 * Page View Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//load classes and components
import React, { Component } from 'react';
import ReactIScroll from 'react-iscroll';
import IScroll from 'iscroll';
import BlurView from './../components/BlurView';
import RelatedTitles from './../components/RelatedTitles';
import Config from './../config';

class PageView extends Component {
    constructor(props) {
        super(props);
        //get a random color crom the colors list
        this.color =
            Config.colors[Math.floor(Math.random() * Config.colors.length)];

        // const v = React.renderToString(<BlurView
        //     title={this.props.itm.data.title}
        // />);
        // console.log('renderToString');
        // console.log(v);
    }

    //make sure we get the right order of components in here
    render() {
        return (
            <div className="pg-page" style={{ backgroundColor: this.color }}>
                <BlurView
                    title={this.props.itm.data.title}
                />
                <ReactIScroll
                    className="IScroll"
                    iScroll={IScroll}
                    options={Config.iScrollOpts}
                >
                    <div className="pg-page-inner">
                        <h1>
                            {this.props.itm.data.title}
                        </h1>
                        <RelatedTitles
                            related={this.props.itm.metadata.related}
                        />
                    </div>
                </ReactIScroll>
            </div>
        );
    }
}

export default PageView;
