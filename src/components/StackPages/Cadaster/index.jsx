import style from './style.module.css'
import Button from '../../StackParts/Button'
import Input from '../../StackParts/Input'
import StackParts from '../../StackParts'
import produtsArr from '../../../data/produtsArr'
import { useRef, useState } from 'react'

export default function Cadaster({ funcComeBackPage }) {

    const refNameProduct = useRef()
    const refAmoutProduct = useRef()

    const addProductInArr = () => {
        if (refNameProduct.current.value != '' && refAmoutProduct.current.value != '') {
            produtsArr.push({ id: produtsArr.length.toString(), name: refNameProduct.current.value, amount: refAmoutProduct.current.value.toString() })
            refNameProduct.current.value = ''
            refAmoutProduct.current.value = ''
        }
    }

    return (
        <StackParts subtitleText={'Insira dados do Produto'} haveComeBack={true} funcComeBack={funcComeBackPage}>

            <div className={style.form_area}>

                <Input ref={refNameProduct} value={refNameProduct.current}>Nome do Produto:</Input>

                <Input ref={refAmoutProduct} value={refAmoutProduct.current}>Unidades do Produto:</Input>

                <Button onClickFunc={addProductInArr}>Cadastrar</Button>

            </div>

        </StackParts>
    )
}