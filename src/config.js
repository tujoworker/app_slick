/**
 * App config
 *
 * @author Tobias Høegh <tobias@tujo.no>
 */

export default {
    APIURL: 'API.json',
    loadBlurImage: true,
    iScrollOpts: {
        disableMouse: true,
        disablePointer: true, //makes it possible to drag the content vertical again
        mouseWheel: true,
        scrollbars: false,
        fadeScrollbars: true,
        freeScroll: false,
        bounce: true,
        // invertWheelDirection: true,
        momentum: true
    },
    sliderSettings: {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        easing: 'easeInOutCirc',
        initialSlide: 0,
        touchThreshold: 5,
        // swipeToSlide: false,
        // slidesToScroll: 4,
        // respondTo: 'min',//slider
        // edgeFriction: 1,
        // focusOnSelect: true,
        // draggable: false,
        // adaptiveHeight: true,
        // beforeChange: (prevIndex, nextIndex) => {
        //     this.setState({
        //         selectedFooter: [0, 1, 2].indexOf(nextIndex) !== -1 ? 1 : 2
        //     });
        // }
        responsive: [
            {
                breakpoint: 1024 * 4,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600 * 2,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480 * 2,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    },
    colors: [
        '#21bf0c',
        '#3eac6a',
        '#0ec4b5',

        '#0db8e3',
        '#0f80aa',
        '#24486b',
        '#3b677d',

        '#ff3366',
        '#cc008b',
        '#990099',
        '#663333',

        // '#ffbf00',
        '#ff8400',
        '#cc0000',
        '#990000',

        '#7b888b',
        '#55666a',
        '#303a3c',
        '#111111'
    ]
};
