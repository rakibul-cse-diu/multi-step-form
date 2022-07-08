import React from 'react';

const Steps = () => {
    return (
        <div className="mx-4 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <div className="relative flex flex-col items-center text-teal-600">
                    <div className="rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 bg-gray-400 text-white font-bold" >
                        <h5>1</h5>
                    </div>
                    <div className="absolute top-0  text-center mt-16 w-32 text-xs font-medium uppercase text-gray-900">
                        description
                    </div>
                </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-400"></div>
        </div>
    );
};

export default Steps;