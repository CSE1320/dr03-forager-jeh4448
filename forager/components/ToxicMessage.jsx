import React from 'react';
import {toxicMessage} from '../data/development';

const ToxicMessage = () => {
    return (
        <div className="message bg-red-500 rounded-xl bg-[#FF5050] text-sm w-full font-medium text-white px-4 py-4 mx-4">
            <div className="header flex items-center">
                <img width="27px" height="27px" className="" src={toxicMessage.icon}></img>
                <h1 className="uppercase">{toxicMessage.header}</h1>
            </div>
            <p className="">{toxicMessage.message}</p>
        </div>
    );
};

export default ToxicMessage;