import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import message from "./components/messages/Message";
import Message from "./components/messages/Message";
import FormMessage from "./components/ui/FormMessage";

// {author: "Иванов", message: "сообщение от Иванова"},
// {author: "Петров", message: "сообщение от петрова"},
// {author: "Сидоров", message: "сообщение от Сидорова"},
// {author: "Федоров", message: "сообщение от Федорова"},
// {author: "Васечкин", message: "сообщение от Васечкина"},
// {author: "Пухликова", message: "сообщение от Пухликовой"}
//

function App() {
    const [messageList, setMessageList] = useState([])

    const [messageValue, setMessageValue] = useState("")
    const [authorValue, setAuthorValue] = useState("")



    return (
        <>
            <FormMessage author={authorValue} message={messageValue}/>
            {messageList.length > 0 && messageList.map((message) => <Message>{message.message}</Message>) }
        </>
    )

}

export default App;
