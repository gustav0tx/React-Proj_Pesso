import style from './style.module.css'

export default function ActionsArea ({ children }) {
    return(
        <div className={style.actions_area}>
            {children}
        </div>
    )
}