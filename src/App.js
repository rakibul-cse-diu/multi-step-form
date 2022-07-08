import './App.css';
import PersonalInfo from './components/Information/PersonalInfo';
import Steps from './components/Steps/Steps';
import { useSelector } from 'react-redux';
import AcademicInfo from './components/Information/AcademicInfo';
import PaymentInfo from './components/Information/PaymentInfo';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const step = useSelector(state => state.step);
  console.log(step)

  return (
    <div className="App mx-auto rounded-2xl bg-white py-2 mt-2 shadow-xl md:w-1/2">
      {
        step <= 3 && <>
          <h1 className='text-2xl text-gray-900 font-semibold'>Multi-Step Form</h1>
          <div className='horizontal container mt-5'>
            <Steps />
            <div className='my-10 p-10'>
              {
                step === 1 && <PersonalInfo />
              }
              {
                step === 2 && <AcademicInfo />
              }
              {
                step === 3 && <PaymentInfo />
              }
            </div>
          </div>
        </>
      }
      {
        step > 3 && <UserDetails />
      }
    </div>
  );
}

export default App;
