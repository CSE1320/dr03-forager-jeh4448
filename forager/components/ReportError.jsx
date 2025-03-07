import React from 'react';

const ReportError = () => {
    return (
        <>
            
            <div className="flex justify-end">
                <div className='words flex mr text-black items-center'>Not what you selected?</div>
                <div className="Error bg-red-500 ml-auto rounded-xl bg-[#FF5050] text-sm font-medium text-white px-4 py-4 flex flex-col items-center">
                    <div className="header flex items-center">
                    </div>
                    <p className="text-center">Report Error &gt;</p>
                </div>
            </div>
        </>
    );
};

export default ReportError;
