import style from './style.module.css'

export default function Home({ funcGoToCadaster, funcGoToStockView }) {
    return (
        <div className={style.container}>

            <h2 className={style.title}>Stock & <span className={style.title_emphasis}>Control</span></h2>

            <div className={style.main_area}>

                <div className={style.actions_area}>

                    <h3 className={style.subtitle}>Bem-Vindo, Escolha uma ação</h3>

                    <div className={style.buttons_area}>

                        <button className={style.button} onClick={funcGoToCadaster}>Quero Cadastrar produto</button>

                        <button className={style.button} onClick={funcGoToStockView}>Quero Verificar Estoque</button>

                    </div>

                </div>

            </div>

        </div>
    )
}