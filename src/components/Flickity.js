import React from 'react';
import Flickity from 'flickity';
// var Flickity = require('flickity');

export default React.createClass({
    getInitialState() {
        return {
            selectedIndex: 0
        };
    },

    componentDidMount() {
        const carousel = this.refs.carousel.getDOMNode();
        const options = {
            cellSelector: '.card',
            contain: true,
            initialIndex: 0,
            accessibility: true
        };

        this.flkty = new Flickity(carousel, options);
        this.flkty.on('cellSelect', this.updateSelected);
    },

    updateSelected() {
        var index = this.flkty.selectedIndex;
        this.setState({
            selectedIndex: index
        });
    },

    componentWillUnmount() {
        if (this.flkty) {
            this.flkty.off('cellSelect', this.updateSelected);
            this.flkty.destroy();
        }
    },

    render() {
        return (
            <div ref="carousel" className="carousel">
                <div className="card">1</div>
                <div className="card">2</div>
                <div className="card">3</div>
                <div className="card">4</div>
            </div>
        );
    }
});
