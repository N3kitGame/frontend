import './App.css';
import {useState} from "react";

function App() {
  const[input,setInput] = useState('');

  const handleChange = (e) => {
      fetch('http://localhost:8000/api/save-data',{
          method: 'POST',
          headers:{'Content-Type': 'application/json'},
          body: JSON.stringify({data: input})
      }).then(response => response.json())
          .then(data => console.log('Data sent to backend:', data));
  };

  return (
      <>
        <div>
            <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />
            <button onClick={handleSubmit}>Отправить</button>
        </div>
      </>
  );
}

export default App;
