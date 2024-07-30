//=================================================================//
import {
        BUTTON_SELECT,
        OPTION_BUTTONS_CONTAINER,
        OPTION_BUTTONS_CONTENT,
        BUTTON_OPEN_OPTIONS,
        CONTENT_BUTTON_SELECT,
        CONTAINER_PAGE_INFO,
        PRODUCT_INFO_CONTAINER,
        IMG_PRODUCT_INFO,
        TITLE_PRODUCT_INFO,
        DESCRIPTION_PRODUCT_INFO,
        CLOSE_PRODUCT_INFO,
        CODE_ID_PRODUCT_INFO,
} from "./style_P_I_S";
//=================================================================//
import { FaArrowLeft } from "react-icons/fa"
import { useContext, useState } from "react";
import { UseContext } from "../../context/context";
import { PiShoppingCart } from "react-icons/pi";
import { FaMoneyBills, FaPix } from "react-icons/fa6";

export const ProductInformationScreen = () => {

    const {
        formatCurrency, adicionarItem, closeProductInformation, changeId,
        setChangeId, changeCode, setChangeCode, changeColor, setChangeColor,
        selectId, selectCode, productInformation, atualizarInformation, selectValue, selectValuePix, selectMeasure, buttonSelect_1, buttonSelect_2, setButtonSelect_2
    } = useContext(UseContext);  
        
    const changeValue = (id, code, color, number) => {
        console.log(id)
        setChangeId(id)
        setChangeCode(code)
        setChangeColor(color)
        setButtonSelect_2(number)
    }
    const [optionButtons, setOptionButtons] = useState(false)
    
    return (
        <CONTAINER_PAGE_INFO>
            {
                productInformation.map((it) => (
                    <PRODUCT_INFO_CONTAINER key={it.productInfo.id}>  
                        <IMG_PRODUCT_INFO alt="" src={it.productInfo.imag} />
                        <TITLE_PRODUCT_INFO>{it.productInfo.title}</TITLE_PRODUCT_INFO>
                        <BUTTON_OPEN_OPTIONS>
                            {it.productInfo.measure_1 ?? undefined ?
                            <button onClick={()=> setOptionButtons(true)}>
                                <div>
                                    <span>Medida:</span>
                                    <b>{selectMeasure}</b>
                                </div>
                                <svg>
                                    <path d="M-5 14 L8 7 L0 3" ></path>
                                </svg>
                            </button>
                            :''}
                            {it.productInfo.color_1 ?? undefined ?
                            <button onClick={()=> setOptionButtons(true)}>
                                <div>
                                    <span>Cor:</span>
                                    <img alt="" src={changeColor} />
                                </div>
                                <svg>
                                    <path d="M-5 14 L8 7 L0 3" ></path>
                                </svg>
                            </button>
                            :''}
                        </BUTTON_OPEN_OPTIONS>
                        <DESCRIPTION_PRODUCT_INFO>
                            <b style={{color:'#00468c'}}><FaMoneyBills /> À vista { formatCurrency(selectValue * 1)}</b>
                            <b style={{color:'#009F46'}}><FaPix /> No Pix {formatCurrency(selectValuePix * 1)}</b>
                            <section>Descrição</section>
                            <span>{it.productInfo.line_1}</span>
                            <span>Medidas: {it.productInfo.line_2}</span>
                            <span>{it.productInfo.line_3}</span>
                            <span>{it.productInfo.line_4}</span>
                            <span>{it.productInfo.line_5}</span>
                            <span>{it.productInfo.line_6}</span>
                            <CODE_ID_PRODUCT_INFO>
                                {(it.productInfo.color_1 ?? undefined ? <span>{changeId}</span> : <span>{it.productInfo.id}</span>)}
                                {(it.productInfo.color_1 ?? undefined ? <span>{changeCode}</span> : <span>{it.productInfo.code}</span>)}
                            </CODE_ID_PRODUCT_INFO>
                        </DESCRIPTION_PRODUCT_INFO>

                        {it.productInfo.color_1 ?? undefined ?
                            <section onClick={() => adicionarItem(it.productInfo.title, changeId, changeCode, changeColor, selectMeasure )}>
                                <button>Adicionar ao carrinho <PiShoppingCart /></button>
                            </section>
                            :
                            <section onClick={() => adicionarItem(it.productInfo.title, it.productInfo.id, it.productInfo.code)}>
                                <button>Adicionar ao carrinho <PiShoppingCart /></button>
                            </section>
                        }
                        <CLOSE_PRODUCT_INFO>
                            <button onClick={()=> closeProductInformation()}>
                                <FaArrowLeft />
                            </button>
                         </CLOSE_PRODUCT_INFO>
                    </PRODUCT_INFO_CONTAINER>
                ))
            }
            {
                productInformation.map((it) => (
                    (it.productInfo.color_1 ?? undefined ?
                        <OPTION_BUTTONS_CONTAINER display={optionButtons ? 'flex' : 'none'} key={it.productInfo.id}>
                            <section  onClick={()=> setOptionButtons(false)}></section>
                            <OPTION_BUTTONS_CONTENT>
                            {(it.productInfo.measure_1 ?? undefined ?
                            <>
                                <span>Medida: </span><b>{selectMeasure}</b>
                                <CONTENT_BUTTON_SELECT>
                                    <BUTTON_SELECT border={buttonSelect_1 === 0 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'} 
                                        onClick={()=> atualizarInformation(
                                            0, it.productInfo.id_1, it.productInfo.code_1, it.productInfo.color_1, it.productInfo.value_1, it.productInfo.measure_1
                                    )}>
                                        {it.productInfo.measure_1}
                                    </BUTTON_SELECT>
                                    <BUTTON_SELECT border={buttonSelect_1 === 1 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                        onClick={()=> atualizarInformation(
                                            1, it.productInfo.id_2, it.productInfo.code_2, it.productInfo.color_1, it.productInfo.value_2, it.productInfo.measure_2
                                    )}>
                                        {it.productInfo.measure_2}
                                    </BUTTON_SELECT>
                                    <BUTTON_SELECT border={buttonSelect_1 === 2 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                        onClick={()=> atualizarInformation(
                                            2, it.productInfo.id_3, it.productInfo.code_3, it.productInfo.color_1, it.productInfo.value_3, it.productInfo.measure_3
                                    )}>
                                        {it.productInfo.measure_3}
                                    </BUTTON_SELECT>
                                    <BUTTON_SELECT border={buttonSelect_1 === 3 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                        onClick={()=> atualizarInformation(
                                            3, it.productInfo.id_4, it.productInfo.code_4, it.productInfo.color_1, it.productInfo.value_4, it.productInfo.measure_4
                                    )}>
                                        {it.productInfo.measure_4}
                                    </BUTTON_SELECT>
                                </CONTENT_BUTTON_SELECT>
                            </>
                            :'')}
                            <span>Cor: </span><img alt="" src={changeColor} />
                            <CONTENT_BUTTON_SELECT>
                                {(it.productInfo.color_1 ?? undefined ?
                                <BUTTON_SELECT border={buttonSelect_2 === 1 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                    onClick={()=> changeValue(selectId[0], selectCode[0], it.productInfo.color_1, 1)}>
                                    <img alt="" src={it.productInfo.color_1} />
                                </BUTTON_SELECT> : '')}
                                {(it.productInfo.color_2 ?? undefined ? 
                                <BUTTON_SELECT border={buttonSelect_2 === 2 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                    onClick={()=> changeValue(selectId[1], selectCode[1], it.productInfo.color_2, 2)}>
                                    <img alt="" src={it.productInfo.color_2} />
                                </BUTTON_SELECT> : '')}
                                {(it.productInfo.color_3 ?? undefined ?
                                <BUTTON_SELECT border={buttonSelect_2 === 3 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                    onClick={()=> changeValue(selectId[2], selectCode[2], it.productInfo.color_3, 3)}>
                                    <img alt="" src={it.productInfo.color_3} />
                                </BUTTON_SELECT> : '')}
                                {(it.productInfo.color_4 ?? undefined ?
                                <BUTTON_SELECT border={buttonSelect_2 === 4 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                    onClick={()=> changeValue(selectId[3], selectCode[3], it.productInfo.color_4, 4)}>
                                    <img alt="" src={it.productInfo.color_4} />
                                </BUTTON_SELECT> : '')}
                                {(it.productInfo.color_5 ?? undefined ?
                                <BUTTON_SELECT border={buttonSelect_2 === 5 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                    onClick={()=> changeValue(selectId[4], selectCode[4], it.productInfo.color_5, 5)}>
                                    <img alt="" src={it.productInfo.color_5} />
                                </BUTTON_SELECT> : '')}
                                {(it.productInfo.color_6 ?? undefined ?
                                <BUTTON_SELECT border={buttonSelect_2 === 6 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                    onClick={()=> changeValue(selectId[5], selectCode[5], it.productInfo.color_6, 6)}>
                                    <img alt="" src={it.productInfo.color_6} />
                                </BUTTON_SELECT> : '')}
                                {(it.productInfo.color_7 ?? undefined ?
                                <BUTTON_SELECT border={buttonSelect_2 === 7 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                    onClick={()=> changeValue(selectId[6], selectCode[6], it.productInfo.color_7, 7)}>
                                    <img alt="" src={it.productInfo.color_7} />
                                </BUTTON_SELECT> : '')}
                                {(it.productInfo.color_8 ?? undefined ?
                                <BUTTON_SELECT border={buttonSelect_2 === 8 ? 'blue 2px solid' : 'rgb(200,200,200) 2px solid'}
                                    onClick={()=> changeValue(selectId[7], selectCode[7], it.productInfo.color_8, 8)}>
                                    <img alt="" src={it.productInfo.color_8} />
                                </BUTTON_SELECT> : '')}
                            </CONTENT_BUTTON_SELECT>
                            <section>
                                <button onClick={()=> setOptionButtons(false)} >Confirmar</button>
                            </section>
                            </OPTION_BUTTONS_CONTENT>
                        </OPTION_BUTTONS_CONTAINER>
                    :'')
                ))
            }
            
    </CONTAINER_PAGE_INFO>
    )
}