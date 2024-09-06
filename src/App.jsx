import { useEffect, useState } from "react";
import './index.css';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-center mb-6">
          01- Start Stop Timer using React and TailwindCSS
        </h1>

        <div className="text-4xl font-mono mb-6">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>

        <div className="flex space-x-4">
          {running ? (
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => setRunning(false)}
            >
              Stop
            </button>
          ) : (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              onClick={() => setRunning(true)}
            >
              Start
            </button>
          )}
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            onClick={() => {
              setTime(0);
              setRunning(false);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
