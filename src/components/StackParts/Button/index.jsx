import style from './style.module.css'

export default function Button ({ children, onClickFunc, ...rest }) {
    return(
        <>

            <button onClick={onClickFunc} className={style.button} {...rest}>{children}</button>

        </>
    )
}