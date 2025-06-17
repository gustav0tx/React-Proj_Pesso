import StackParts from "../../StackParts";
import Button from "../../StackParts/Button";
import trash from "../../../assets/delete.png";
import style from './style.module.css'
import Select from "../../StackParts/Select";
import Input from "../../StackParts/Input";
import { useState } from "react";

export default function StockView({ funComeBackPage, productsArr, setProductArr }) {

    const removeProduct = (id) => {
        setProductArr(productsArr.filter(p => p.id != id))
    }

    const [selectValue, setSelectValue] = useState('Nome')

    const getSelectValue = (e) => {
        setSelectValue(e.target.value)
    }

    const [searchInput, setSearchInput] = useState('')

    const getSearchValue = (e) => {
        setSearchInput(e.target.value)
    }

    const [filterArr, setFilterArr] = useState([])

    const clearSearch = () => {
        setFilterArr([])
    }

    const search = () => {
        switch (selectValue) {
            case 'Nome':
                setFilterArr(productsArr.filter(p => p.name == searchInput))
                break
            case 'Id':
                setFilterArr(productsArr.filter(p => p.id == searchInput))
                break
            case 'Unidades':
                setFilterArr(productsArr.filter(p => p.amount == searchInput))
                break
        }
    }

    return (
        <StackParts subtitleText={'Produtos em Estoque'} haveComeBack={true} funcComeBack={funComeBackPage}>

            <div className={style.search_area}>

                <Select titleSelect={'Buscar por:'} arrOptions={['Nome', 'Id', 'Unidades']} onChange={getSelectValue} /> <br />

                <Input onChange={getSearchValue}>Buscar:</Input>

                <Button onClickFunc={search}>Buscar</Button>

            </div>

            <div className={style.products}>

                {productsArr.map((product) => (
                    <div key={product.id} className={style.product}>

                        <h4>Id: <span>{product.id.slice(0, 2)}</span></h4>
                        <h4>Nome: <span>{product.name.length < 7 ? product.name : product.name.slice(0, 5).concat('..')}</span></h4>
                        <h4>Unidades: <span>{product.amount.length >= 8 ? product.amount.slice(0, 6).concat('..') : product.amount}</span></h4>
                        <Button onClickFunc={() => { removeProduct(product.id) }}><img src={trash} alt="" /></Button>

                    </div>
                ))}

            </div>

            <div className={style.search_result}>

                {filterArr.map((product) => (
                    <div key={product.id}>

                        <h3 className={style.result}>Resultado da Pesquisa:</h3>

                        <div className={style.product}>

                            <h4>Id: <span>{product.id.slice(0, 2)}</span></h4>
                            <h4>Nome: <span>{product.name.length < 7 ? product.name : product.name.slice(0, 5).concat('..')}</span></h4>
                            <h4>Unidades: <span>{product.amount.length >= 8 ? product.amount.slice(0, 6).concat('..') : product.amount}</span></h4>
                            <Button onClickFunc={clearSearch}>&#215;</Button>

                        </div>

                    </div>
                ))}

            </div>

        </StackParts>
    )
}