//import logo from './logo.svg';
import {useState} from "react";
import {Message} from "./components/Message";


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


function App() {
    const [textArr] = useState(['Первое сообщение.', 'Важное сообщение!', 'Не важное сообщение', 'Непонятное сообщение....'])
    const [messageNo, setMessageNo] = useState(-1)

    const handleClick = () => {
        setMessageNo(getRandomNumber(0, textArr.length))
    }

    return (
        <>
            <button onClick={handleClick}>Сообщить</button>
            {messageNo >= 0 && <Message text={textArr[messageNo]} />}
        </>
    );
}

export default App;
