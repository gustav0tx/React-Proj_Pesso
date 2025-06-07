import style from './style.module.css'

export default function Title () {
    return(
        <>

            <h2 className={style.title}>Stock & <span className={style.title_emphasis}>Control</span></h2>

        </>
    )
}