import style from './style.module.css'

export default function Select ({ arrOptions, titleSelect, ...rest }) {
    return(
        <>

            <p className={style.select_title}>{titleSelect}</p>
            <select className={style.select} {...rest}>
                {arrOptions.map((option, i) => (
                    <option key={i} className={style.select_options} value={option}>{option}</option>
                ))}
            </select>

        </>
    )
}