import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { decreaseStep, increaseStep, SaveInfo } from '../../StateManagement/action/formActions';

const StepsControll = ({ data }) => {
    const userInfo = useSelector(state => state.userInfo);
    const step = useSelector(state => state.step);
    console.log(userInfo)
    console.log(step)
    const dispatch = useDispatch();

    const handleNext = () => {
        const newData = { ...userInfo, ...data };
        if (step < 3) {
            dispatch(increaseStep());
            dispatch(SaveInfo(newData));
        }
    }
    const handleBack = () => {
        dispatch(decreaseStep());
    }
    return (
        <div className="container mt-8 flex justify-around">
            <button
                onClick={handleBack}
                className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white ${step === 1 ? 'hidden' : 'visible'}`}>
                Back
            </button>

            <button onClick={handleNext} className="cursor-pointer rounded-lg bg-green-500 py-2 px-4 font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white">
                {step === 3 ? "Confrim All" : "Next"}
            </button>
        </div>
    );
};

export default StepsControll;