import './App.css';
import { useState } from "react";

function App() {
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const sendFirstData = async () => {
        const response = await fetch('http://localhost:8000/api/save-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: input })
        });
        const result = await response.json();
        setResponseMessage(result.message);
        setInput("");
    };

    const fetchData = async () => {
        const response = await fetch('http://localhost:8000/api/get-data');
        const result = await response.json();
        setInput2(result.data || '');
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Введите данные"
                />
                <button onClick={sendFirstData}>Отправить</button>
                <p>{responseMessage}</p>

                <button onClick={fetchData}>Получить данные</button>
                <input
                    type="text"
                    value={input2}
                    readOnly
                    placeholder="Полученные данные"
                />
            </div>
        </>
    );
}

export default App;