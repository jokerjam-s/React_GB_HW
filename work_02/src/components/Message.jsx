import style from './Message.component.css'

function Message(props){
    return(
        <>
            <div className={style.message}>
                <h3>{props.title}</h3>
                <hr/>
                <p>{props.message}</p>
                <p className={style.author}>{props.author}</p>
            </div>
        </>
    )
}

export default Message