import React from 'react';
import { warningMessage } from '../data/development';

const Message = () => {
    return (
        <div className="message bg-red-500 rounded-xl bg-[#FF5050] text-sm w-full font-medium text-white px-4 py-4 flex flex-col items-center">
            <div className="header flex items-center">
                <img width="27px" height="27px" src={warningMessage.icon} alt="Warning Icon" />
                <h1 className="uppercase ml-2">{warningMessage.header}</h1>
            </div>
            <p className="text-center">{warningMessage.message}</p>
        </div>
    );
};

export default Message;
