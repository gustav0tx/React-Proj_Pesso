import style from './style.module.css'

export default function Input ({ children, type, ...rest }) {
    return(
        <>
        
            <label className={style.label}>
                {children} <br />
                <input type={type} className={style.input} placeholder='Digite Aqui..' {...rest} />
            </label><br />
        
        </>
    )
}