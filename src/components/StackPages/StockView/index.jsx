import StackParts from "../../StackParts";
import Button from "../../StackParts/Button";
import trash from "../../../assets/delete.png";
import style from './style.module.css'
import Select from "../../StackParts/Select";
import Input from "../../StackParts/Input";
import produtsArr from "../../../data/produtsArr";
import { useState } from "react";

export default function StockView({ funComeBackPage }) {

    const [products, setProducts] = useState(produtsArr)    

    return (
        <StackParts subtitleText={'Produtos em Estoque'} haveComeBack={true} funcComeBack={funComeBackPage}>

            <div className={style.search_area}>

                <Select titleSelect={'Buscar por:'} arrOptions={['Nome','Id','Unidades']} /> <br />

                <Input>Buscar:</Input>

            </div>

            <div className={style.products}>

                {products.map((product) => (
                    <div key={product.id} className={style.product}>

                        <h4>Id: <span>{product.id.slice(0, 2)}</span></h4>
                        <h4>Nome: <span>{product.name.length < 7 ? product.name : product.name.slice(0, 5).concat('..')}</span></h4>
                        <h4>Unidades: <span>{product.amount}</span></h4>
                        <Button><img src={trash} alt="" /></Button>

                    </div>
                ))}

            </div>

        </StackParts>
    )
}