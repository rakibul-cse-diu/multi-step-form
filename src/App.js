import './App.css';
import Steps from './components/Steps/Steps';

function App() {
  return (
    <div className="App">
      <h1 className='text-2xl text-gray-900 font-semibold'>Multi-Step Form</h1>

      <div className='horizontal container mt-5'>
        <Steps />
      </div>
    </div>
  );
}

export default App;
