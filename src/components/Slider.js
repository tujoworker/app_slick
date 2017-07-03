/**
 * Slider Component
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

//load classes and components
import React, { Component } from 'react';
// import Flickity from './../components/Flickity';
// import Slick from 'react-slick';
import Slick from './../lib/react-slick';//I use a modifyed version of slick here. Make sure to track version in future manuallty

/**
    This I changed in react-slick:
    1. In the the file "/src/mixins/event-handlers" and function "swipeMove"
    2. I inserted the following code at line 111

    //make sure the user swipse a little bit before we actually moves the slider
    if(touchObject.swipeLength < 10){
        return;
    }
    //and check if the user first swipes vertical, then skip as well
    touchObject.swipeLengthVertical = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
    if(touchObject.swipeLengthVertical > touchObject.swipeLength){
        this.setState({ swiped: true });
        e.preventDefault();
        return;
    }
*/

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
