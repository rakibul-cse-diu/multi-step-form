import React from 'react';
import StepsControll from '../Steps/StepsControll';

const PaymentInfo = () => {
    return (
        <div className="flex flex-col">
            <div className="mx-2 w-full">
                <div className="mt-3 h-6 text-xs text-left font-bold uppercase leading-8 text-gray-500">
                    Bank Name
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        type="text"
                        autoComplete='off'
                        name="bankname"
                        placeholder="Bank name"
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full">
                <div className="mt-3 h-6 text-xs text-left font-bold uppercase leading-8 text-gray-500">
                    Account Number
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        autoComplete='off'
                        name="accountnumbet"
                        placeholder="125.256.8800"
                        type="number"
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <div className="mx-2 w-full">
                <div className="mt-3 h-6 text-xs text-left font-bold uppercase leading-8 text-gray-500">
                    Amount
                </div>
                <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                    <input
                        autoComplete='off'
                        name="amount"
                        placeholder="10,000"
                        type="number"
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none"
                    />
                </div>
            </div>
            <StepsControll data={{ name: "Rakibul" }} />
        </div>
    );
};

export default PaymentInfo;