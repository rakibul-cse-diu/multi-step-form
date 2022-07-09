import React from 'react';
import { useState } from 'react';
import StepsControll from '../Steps/StepsControll';

const PersonalInfo = () => {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState(0);
    return (
        <div className="flex flex-col">
            <div className="mx-2 w-full">
                <div className="mt-3 h-6 text-xs text-left font-bold uppercase leading-8 text-gray-500">
                    Full Name
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={(e) => setFullName(e.target.value)}
                        type="text"
                        autoComplete='off'
                        name="fullname"
                        placeholder="Full name"
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full">
                <div className="mt-3 h-6 text-xs text-left font-bold uppercase leading-8 text-gray-500">
                    Address
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={(e) => setAddress(e.target.value)}
                        autoComplete='off'
                        name="address"
                        placeholder="Address"
                        type="text"
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full">
                <div className="mt-3 h-6 text-xs text-left font-bold uppercase leading-8 text-gray-500">
                    Phone
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete='off'
                        name="phone"
                        placeholder="017********"
                        type="number"
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <StepsControll data={{ name: fullName, address, phone }} />
        </div>
    );
};

export default PersonalInfo;