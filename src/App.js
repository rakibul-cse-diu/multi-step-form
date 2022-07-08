import './App.css';
import PersonalInfo from './components/Information/PersonalInfo';
import Steps from './components/Steps/Steps';

function App() {
  return (
    <div className="App mx-auto rounded-2xl bg-white py-2 mt-2 shadow-xl md:w-1/2">
      <h1 className='text-2xl text-gray-900 font-semibold'>Multi-Step Form</h1>

      <div className='horizontal container mt-5'>
        <Steps />
        <div className='my-10 p-10'>
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
