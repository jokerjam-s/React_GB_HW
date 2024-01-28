import Button from "./Button";
import Input from "./Input";
import style from "./FormMessage.module.css"
import {useState} from "react";

function FormMessage() {
    const [author, setAuthor] = useState("")
    const [message, setMessage] = useState("")

    const getMessage = () => {
        let newMessage = {
            newAuthor: author,
            newMessage: message
        }

    }


    return (
        <>
            <form>
                <div className={style.form_flex}>
                    <label>Сообщение</label>
                    <Input type="text" maxLength="150" name="message" onChange={(ev) => setMessage(ev.target.value)}/>
                    <label>Автор</label>
                    <Input type="text" maxLength="50" name="author" onChange={(ev) => setAuthor(ev.target.value)}/>
                    <Button type="submit" onclick={getMessage}>Сообщить</Button>
                </div>
            </form>
        </>
    )
}

export default FormMessage