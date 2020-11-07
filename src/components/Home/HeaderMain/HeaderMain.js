import React from 'react';
import {
    Link
} from 'react-router-dom';
import './HeaderMain.css';
import headImage from '../../../utilities/images/head.png'

const HeaderMain = () => {
    return ( <
        main className = "row d-flex align-items-center mt-5 " >
        <
        div className = "col-md-4 col-sm-6 col-12 offset-md-1" >
        <
        h1 style = {
            {
                color: '#507786',
                fontWeight: 'bold'
            }
        } > One stop block < br / >
        for < br / > everything IT < /h1> <
        p > We are your go to personalized tailor made IT solutions provider
        for Web & Mobile applications development, Cloud services, Networking, Content Creation, Infrastructure and anything
        else you can call IT! < /p> <
        Link to = "#"
        style = {
            {
                backgroundColor: '#BA55D3',
                color: 'white'
            }
        }
        className = "btn" > Start form $99 < /Link> < /
        div > <
        div className = " col-md-6 col-sm-6 col-12" >
        <
        img src = {
            headImage
        }
        className = "img-fluid frame" / >
        <
        /div> < /
        main >
    );
};

export default HeaderMain;