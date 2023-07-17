import {useState} from "react";

function App() {
  const [result, setResult] = useState('');

  const sendDataToAPI = async () => {
    const url = 'http://localhost:5000/get-prediction';
    const data = { user_data: [41, 0, 8, 8, 8, 8, 8, 8] };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resultData = await response.json();
      setResult(resultData.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div>
        <button onClick={sendDataToAPI}>Send Data</button>
        <div>Result: {result}</div>
      </div>
  );
}

export default App;
