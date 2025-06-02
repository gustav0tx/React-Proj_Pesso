import style from './style.module.css'
import back from '../../../assets/arrow_back.png'

export default function Cadaster({ funcComeBackPage }) {
    return (
        <div className={style.container}>

            <h2 className={style.title}>Stock & <span className={style.title_emphasis}>Control</span></h2>

            <button className={style.back_button} onClick={funcComeBackPage}><img src={back} alt="Imagem seta voltando" /></button>

            <div className={style.main_area}>

                <div className={style.actions_area}>

                    <h3 className={style.subtitle}>Insira Dados do Produto</h3>

                    <div className={style.form_area}>

                        <label>
                            Nome do Produto: <br />
                            <input type="text" placeholder="Digite Aqui.." />
                        </label><br />

                        <label>
                            Quantidade do Produto: <br />
                            <input type="text" placeholder="Digite Aqui.." />
                        </label><br />

                        <button>Cadastrar</button>

                    </div>

                </div>

            </div>

        </div>
    )
}