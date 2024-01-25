import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import message from "./components/Message";
import Message from "./components/Message";

// {author: "Иванов", message: "сообщение от Иванова"},
// {author: "Петров", message: "сообщение от петрова"},
// {author: "Сидоров", message: "сообщение от Сидорова"},
// {author: "Федоров", message: "сообщение от Федорова"},
// {author: "Васечкин", message: "сообщение от Васечкина"},
// {author: "Пухликова", message: "сообщение от Пухликовой"}
//

function App() {
    const [messageList, setMessageList] = useState([])


    return (
        messageList.map((message) => <Message>{message.message}</Message> )

    );
}

export default App;
