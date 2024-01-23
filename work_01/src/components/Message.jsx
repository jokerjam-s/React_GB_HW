import style from './Message.module.css'

export function Message(props){
    return (
        <>
            <div className={style.alert}>{props.text}</div>
        </>
    )
}