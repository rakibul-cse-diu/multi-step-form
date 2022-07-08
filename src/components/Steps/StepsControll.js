import React from 'react';

const StepsControll = () => {
    return (
        <div className="container mt-8 flex justify-around">
            <button
                className="cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
                Back
            </button>

            <button className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
                Next
            </button>
        </div>
    );
};

export default StepsControll;