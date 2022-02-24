
import './App.css';
import {useState} from "react"
export default function App() {
  const [inputs, setInputs] = useState([]);
  const addItem = () => {
    setInputs([
      ...inputs,
      {
        id: inputs.length,
        value: Math.floor(Math.random() * 20) + 1,
      },
    ]);
  };

  return (
    <div className="App">
      <h3>Simple useState hook</h3>
      <button onClick={addItem}>Add a number</button>
      {inputs.map((input) => (
        <li key={input.id}>{input.value}</li>
      ))}
    </div>
  );
}
