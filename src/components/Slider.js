/**
 * Slider Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//load classes and components
import React, { Component } from 'react';
import Slick from 'react-slick';//I use a modifyed version of slick here. Se package.json

import PageView from './../components/PageView';
import { ErrorView } from './../components/StatusViews';
import Config from './../config';
import './../css/slick.scss';

class Slider extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        //loop though the data and make add the PageView component in to the rows stack
        this.rows = [];
        Object.keys(this.props.data).forEach(k => {
            if (!Number.isInteger(parseFloat(k))) {
                return;
            }
            const itm = this.props.data[k];
            // console.log(itm);
            this.rows.push(
                <div key={'pid' + itm.data.id}>
                    <PageView itm={itm} />
                </div>
            );
        });

        //in case there are no rows
        if (this.rows.length === 0) {
            return (
                <ErrorView
                    text={
                        'No data to show. Contact support for reporting this issue.'
                    }
                />
            );
        }

        //render all rows
        return (
            <Slick {...Config.sliderSettings}>
                {this.rows}
            </Slick>
        );
    }
}

export default Slider;
