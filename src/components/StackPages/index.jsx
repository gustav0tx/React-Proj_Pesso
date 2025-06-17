import { useState } from "react"
import Home from "./Home"
import Cadaster from "./Cadaster"
import StockView from "./StockView"
import './style.css'

export default function StackPages () {
    
    const [page,setPage] = useState(0)

    const [products, setProducts] = useState([])

    const goToCadaster = () => {
        setPage(1)
    }
    
    const goToStockView = () => {
        setPage(2)
    }

    const comeBackPage = () => {
        setPage(0)
    }

    return(
        <>

            {page == 0 && <Home
            funcGoToCadaster={goToCadaster}
            funcGoToStockView={goToStockView}
            />}
            
            {page == 1 && <Cadaster 
            funcComeBackPage={comeBackPage}
            productArr={products}
            setProductArr={setProducts}
            />}

            {page == 2 && <StockView 
            funComeBackPage={comeBackPage}
            productsArr={products}
            setProductArr={setProducts}
            />}

        </>
    )
}