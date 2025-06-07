import style from './style.module.css'

export default function Subtitle ({ children }) {
    return(
        <>

            <h3 className={style.subtitle}>{children}</h3>

        </>
    )
}