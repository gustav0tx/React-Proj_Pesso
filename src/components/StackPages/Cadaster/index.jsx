import style from './style.module.css'
import Button from '../../StackParts/Button'
import Input from '../../StackParts/Input'
import StackParts from '../../StackParts'
import { useRef, useState } from 'react'

export default function Cadaster({ funcComeBackPage, productArr, setProductArr }) {

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    

    const addProductInArr = (name, amount) => {
        setProductArr([...productArr,  {id: productArr.length.toString(), name: name, amount: amount}])
        setName('')
        setAmount('')
    }

    return (
        <StackParts subtitleText={'Insira dados do Produto'} haveComeBack={true} funcComeBack={funcComeBackPage}>

            <div className={style.form_area}>

                <Input value={name} onChange={(e) => setName(e.target.value)}>Nome do Produto:</Input>

                <Input value={amount} onChange={(e) => setAmount(e.target.value)}>Unidades do Produto:</Input>

                <Button onClickFunc={() => {addProductInArr(name, amount)}}>Cadastrar</Button>

            </div>

        </StackParts>
    )
}