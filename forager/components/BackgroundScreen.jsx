import React from 'react';
import {camScreen} from '../data/development';

const BackgroundScreen = () => {
    return (
        <div className="">
            <div className="header flex items-center">
                <img className="" src={camScreen.screen}></img>
                <h1 className="uppercase">{camScreen.header}</h1>
            </div>
            {/* <p className="">{warningMessage.message}</p> */}
        </div>
    );
};

export default BackgroundScreen;