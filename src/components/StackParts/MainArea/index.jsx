import style from './style.module.css'

export default function MainArea ({ children }) {
    return(
        <div className={style.main_area}>
            {children}
        </div>
    )
}