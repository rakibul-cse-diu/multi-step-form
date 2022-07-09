import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { resetStep } from '../../StateManagement/action/formActions';

const UserDetails = () => {
    const userInfo = useSelector(state => state.userInfo);
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetStep());
    }

    return (
        <div>
            <h1 className='text-2xl text-center my-5'>User Details</h1>
            <div>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='text-right font-medium'>
                        <h4>Name: </h4>
                        <h4>Address: </h4>
                        <h4>Phone: </h4>
                        <h4>College: </h4>
                        <h4>Degree: </h4>
                        <h4>Major: </h4>
                        <h4>Bank Name: </h4>
                        <h4>A/C Number: </h4>
                        <h4>Amount: </h4>
                    </div>
                    <div className='text-left'>
                        <p>{userInfo.name}</p>
                        <p>{userInfo.address}</p>
                        <p>{userInfo.phone}</p>
                        <p>{userInfo.college}</p>
                        <p>{userInfo.degree}</p>
                        <p>{userInfo.major}</p>
                        <p>{userInfo.bankName}</p>
                        <p>{userInfo.acountNumber}</p>
                        <p>{userInfo.amount}</p>
                    </div>

                </div>
                <button onClick={handleReset} className="cursor-pointer rounded-lg bg-green-500 py-2 mt-10 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
                    Reset All
                </button>
            </div>
        </div>
    );
};

export default UserDetails;