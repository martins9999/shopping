import { BANNER, PAGE_CONTAINER, PAGE_CONTENT, PRODUCT_CONTAINER, PRODUCT_CONTENT, PRODUCT_DESCRIPTION, PRODUCT_IMAGE } from "../style/stylesPages";
import { products } from "../../components/listProducts/listProducts";
import { useContext, useEffect } from "react";
import { UseContext } from "../../context/context";
import Banner3 from "../../assets/banner-3.png";
import { FaMoneyBills } from "react-icons/fa6";

export const Products002 = () => {

    const { formatCurrency, search, viewProductInformation, setIndex } = useContext(UseContext);

    const newProducts = products[1].map((it) => {
        return {
            ...it,
            value: it.measure_1 ?? undefined ? (it.value[0] * 0.15 + it.value[0]).toFixed(2) : (it.value * 0.15 + it.value).toFixed(2),
            valuePix: it.measure_1 ?? undefined ? ((it.value[0] * 0.15 + it.value[0]) - (it.value[0] *  0.15 + it.value[0]) * 0.05).toFixed(2) :
            ((it.value * 0.15 + it.value) - (it.value *  0.15 + it.value) * 0.05).toFixed(2),
            id: it.color_1 ?? undefined ? it.id[0] : it.id,
            code: it.color_1 ?? undefined ? it.code[0] : it.code,    
            valueInfo: it.measure_1 ?? undefined ? it.value[0] : it.value,    
        }    
    })
    const productSeach = newProducts.filter((prod) =>(
        prod.title.toLowerCase().includes(search.toLowerCase()) ||
        prod.id.toLowerCase().includes(search.toLowerCase())
    ))

    useEffect(() => {
        setIndex(1)
      });

    return (
        <>
            <PAGE_CONTAINER>
                <PAGE_CONTENT>
                    <BANNER>   
                        <img alt="" src={Banner3} />
                    </BANNER>
                    <PRODUCT_CONTAINER style={{minHeight:'100vh'}} >
                        {
                            productSeach.map((it) => (
                                <PRODUCT_CONTENT onClick={()=> viewProductInformation(it.id, it.code, it.color_1, it.valueInfo, it.measure_1)} key={it.id}>
                                    <PRODUCT_IMAGE alt="" src={it.imag} height="calc(100% - 90px)" />
                                    <PRODUCT_DESCRIPTION>
                                        <b>{it.title}</b>
                                        <span><FaMoneyBills /> À vista {formatCurrency(it.value * 1)}</span>
                                    </PRODUCT_DESCRIPTION>   
                                </PRODUCT_CONTENT>
                            ))
                        }
                    </PRODUCT_CONTAINER>
                </PAGE_CONTENT>
            </PAGE_CONTAINER>
        </>
    )
}