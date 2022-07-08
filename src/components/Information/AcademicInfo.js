import React from 'react';
import StepsControll from '../Steps/StepsControll';

const AcademicInfo = () => {
    return (
        <div className="flex flex-col">
            <div className="mx-2 w-full">
                <div className="mt-3 h-6 text-xs text-left font-bold uppercase leading-8 text-gray-500">
                    College Name
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        type="text"
                        autoComplete='off'
                        name="collegename"
                        placeholder="College name"
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full">
                <div className="mt-3 h-6 text-xs text-left font-bold uppercase leading-8 text-gray-500">
                    Degree
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        autoComplete='off'
                        name="degree"
                        placeholder="B.Sc..."
                        type="text"
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full">
                <div className="mt-3 h-6 text-xs text-left font-bold uppercase leading-8 text-gray-500">
                    Major
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        autoComplete='off'
                        name="major"
                        placeholder="CSE"
                        type="text"
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <StepsControll data={{ name: "Rakibul" }} />
        </div>
    );
};

export default AcademicInfo;