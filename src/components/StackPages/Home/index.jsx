import StackParts from '../../StackParts'
import Button from '../../StackParts/Button'
import style from './style.module.css'

export default function Home({ funcGoToCadaster, funcGoToStockView }) {
    return (
        <StackParts subtitleText={'Bem-Vindo, Escolha uma ação'} haveComeBack={false}>

            <div className={style.buttons_area}>

                <Button onClickFunc={funcGoToCadaster}>Quero Cadastrar Produto</Button>

                <Button onClickFunc={funcGoToStockView}>Quero Verificar Estoque</Button>

            </div>

        </StackParts>
    )
}