import './App.css';
import {useState} from "react";

function App() {
  const[input,setInput] = useState('');
  const[input2, setInput2] = useState('');
  const[responseMessage, setResponseMessage] = useState('');

 const sendFirstData = async (event) => {
     const responce = await fetch('http://localhost:5000/api/users/save-data',{
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({data: input})
     });
     const result = await responce.json();
     setResponseMessage(result.message);
     setInput("");
 }

  const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/get-data');
      const result = await response.json();
      setInput(result.data);
  }

  return (
      <>
        <div>
            <input type="text"
                   value={input}
                   onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={sendFirstData}>Отправить</button>
            <p>{responseMessage}</p>
            <button onClick={fetchData}>получить данные</button>
            <input
                type"text"
                value={input2}
                readOnly
                placeholder="Получение данные"
            />
        </div>
      </>
  );
}

export default App;
