import style from './style.module.css'
import back from '../../../assets/arrow_back.png'

export default function ButtonBack ({ onClickFunc }) {
    return(
        <>

            <button onClick={onClickFunc} className={style.button_back}><img src={back} alt="Imagem seta voltando" /></button>

        </>
    )
}