//===================================================================================//
import {
        CONTAINER_SHOPP, CONTENT_SHOPP, DESCRIPTION_PRODUCT_SHOPP, LIST_OF_ITEMS_SHOPP,
        NO_PRODUCT_IN_SHOPP, SHOPP_ORDER_SUMMARY, SHOPP_PRODUCT_CONTAINER
} from "./style_Shopping_Cart";
//===================================================================================//
import { useContext } from "react";
import { UseContext } from "../../context/context";
import { BsCartX } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdAdd, MdRemove } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { LuMenu } from "react-icons/lu";
import { FaMoneyBills, FaPix } from "react-icons/fa6";

export const ShoppingCart = () => {
    const { shoppingCart, adicionarItem, removerItem, emptyCart, formatCurrency, limparCarrinho, qttItemsShop,
        installmentCounter,installmentValue,setInstallmentValue,totalWithInterest,setTotalWithInterest,
        setInstallmentCounter, openShoppingCart, contentDocument, handlePrint, buttonOffPrint, setButtonOffPrint
    } = useContext(UseContext);

    const amount = shoppingCart.reduce((acc, it) =>
        it.quantity * it.newValue + acc, 0
    );
    const valueInPix = shoppingCart.reduce((acc, it) => 
        it.quantity * it.newValuePix + acc , 0
    );
    
    let j2 = 0.052579;
    let j3 = 0.0706;
    let j4 = 0.0887;
    let j5 = 0.107106;
    let j6 = 0.1256;
    let j7 = 0.1444;
    let j8 = 0.1633;
    let j9 = 0.1825;
    let j10 = 0.2018;
    let j11 = 0.2213;
    let j12 = 0.2411;
    let j13 = 0.261;
    let j14 = 0.2811;
    let j15 = 0.3014;
    let j16 = 0.322;
    let j17 = 0.3427;
    let j18 = 0.3636;


    function mais () {
        calculateInstallmentValue(installmentCounter + 1)
        if( installmentCounter <= 17){
            setInstallmentCounter(installmentCounter + 1)
        }
    }
    function menos () {
        calculateInstallmentValue(installmentCounter - 1)
        if( installmentCounter > 1){
            setInstallmentCounter(installmentCounter - 1)
        }
    }
    

    function calculateInstallmentValue (contadorDeParc) {
        if(contadorDeParc === 2) {
            setTotalWithInterest(amount * j2 + amount);
            setInstallmentValue((amount * j2 + amount) / 2);
        }
        if(contadorDeParc === 3) {
            setTotalWithInterest(amount * j3 + amount);
            setInstallmentValue((amount * j3 + amount) / 3);
        }
        if(contadorDeParc === 4) {
            setTotalWithInterest(amount * j4 + amount);
            setInstallmentValue((amount * j4 + amount) / 4);
        }
        if(contadorDeParc === 5) {
            setTotalWithInterest(amount * j5 + amount);
            setInstallmentValue((amount * j5 + amount) / 5);
        }
        if(contadorDeParc === 6) {
            setTotalWithInterest(amount * j6 + amount);
            setInstallmentValue((amount * j6 + amount) / 6);
        }
        if(contadorDeParc === 7) {
            setTotalWithInterest(amount * j7 + amount);
            setInstallmentValue((amount * j7 + amount) / 7);
        }
        if(contadorDeParc === 8) {
            setTotalWithInterest(amount * j8 + amount);
            setInstallmentValue((amount * j8 + amount) / 8);
        }
        if(contadorDeParc === 9) {
            setTotalWithInterest(amount * j9 + amount);
            setInstallmentValue((amount * j9 + amount) / 9);
        }
        if(contadorDeParc === 10) {
            setTotalWithInterest(amount * j10 + amount);
            setInstallmentValue((amount * j10 + amount) / 10);
        }
        if(contadorDeParc === 11) {
            setTotalWithInterest(amount * j11 + amount);
            setInstallmentValue((amount * j11 + amount) / 11);
        }
        if(contadorDeParc === 12) {
            setTotalWithInterest(amount * j12 + amount);
            setInstallmentValue((amount * j12 + amount) / 12);
        }
        if(contadorDeParc === 13) {
            setTotalWithInterest(amount * j13 + amount);
            setInstallmentValue((amount * j13 + amount) / 13);
        }
        if(contadorDeParc === 14) {
            setTotalWithInterest(amount * j14 + amount);
            setInstallmentValue((amount * j14 + amount) / 14);
        }
        if(contadorDeParc === 15) {
            setTotalWithInterest(amount * j15 + amount);
            setInstallmentValue((amount * j15 + amount) / 15);
        }
        if(contadorDeParc === 16) {
            setTotalWithInterest(amount * j16 + amount);
            setInstallmentValue((amount * j16 + amount) / 16);
        }
        if(contadorDeParc === 17) {
            setTotalWithInterest(amount * j17 + amount);
            setInstallmentValue((amount * j17 + amount) / 17);
        }
        if(contadorDeParc === 18) {
            setTotalWithInterest(amount * j18 + amount);
            setInstallmentValue((amount * j18 + amount) / 18);
        }
    }

   
    return (
        <>
            <CONTAINER_SHOPP display={openShoppingCart ? 'flex' : 'none'} >
                {emptyCart ? 
                <>
                    <CONTENT_SHOPP ref={contentDocument} className="content">
                        <LIST_OF_ITEMS_SHOPP display={openShoppingCart ? 'flex' : 'none'} >
                            {
                                shoppingCart.map((item) => (
                                <SHOPP_PRODUCT_CONTAINER key={item.newId}>
                                    <img alt="" src={item.productShopp.productInfo.imag}  />
                                    <DESCRIPTION_PRODUCT_SHOPP>
                                        <section><div>{item.productShopp.productInfo.title}</div></section>
                                        <section>{item.newId} <div>/</div> {item.newCode}</section>
                                        <section>Preço da Unidade: <div>{formatCurrency(item.newValue * 1)}</div></section>
                                        <section>
                                            <span>
                                                Total: 
                                                <div>{item.quantity}</div>
                                                {item.quantity > 1 ? ' Unidades ' : ' Unidade '}
                                                <div>{formatCurrency(item.quantity * item.newValue)}</div>
                                            </span>
                                            {buttonOffPrint ?
                                                <section>
                                                    <MdRemove onClick={() => removerItem(item.newId, item.productShopp.productInfo.title) }/>
                                                    <MdAdd onClick={() => adicionarItem(item.productShopp.productInfo.title, item.newId, shoppingCart) }/>
                                                </section>
                                                :''
                                            }
                                        </section>
                                        <section>
                                            <div>
                                                Medida: {
                                                    item.productShopp.productInfo.measure_1 ?? undefined ?
                                                    item.newMeasure
                                                    :
                                                    item.productShopp.productInfo.line_2
                                                }
                                            </div>{
                                                item.productShopp.productInfo.color_1 ?? undefined ?
                                                <>
                                                    <div>Cor:</div>
                                                    <img alt="" src={item.newColor} />
                                                </>  : ''}
                                        </section>
                                    </DESCRIPTION_PRODUCT_SHOPP>
                                </SHOPP_PRODUCT_CONTAINER>
                                ))
                            }
                            
                            <SHOPP_ORDER_SUMMARY display={openShoppingCart ? 'flex' : 'none'}> 
                                <section> Total: {qttItemsShop} Produtos </section>
                                <section>
                                    <section style={{color:'#00468c'}}>
                                        <FaMoneyBills /> À Vista { formatCurrency(amount) }
                                    </section>
                                    <section style={{color:"#009F46"}}>
                                        <FaPix /> no Pix { formatCurrency(valueInPix) }
                                    </section>
                                </section>
                                <section  style={{color:'#FF2329'}}>
                                        {installmentCounter > 1 ?
                                            <>
                                            <FaCreditCard />E Parcelado { formatCurrency(totalWithInterest) } Em {installmentCounter} x { formatCurrency(installmentValue) }
                                            </>
                                            :''
                                        }
                                </section>
                                <b>Consultar valor do frete ao enviar pedido</b>
                                {buttonOffPrint ?
                                    <>
                                        <section>
                                            {installmentCounter > 2 ?
                                                <>
                                                    <button onClick={()=> menos() }><MdRemove /></button>
                                                </>
                                                : ''
                                            }
                                            {installmentCounter > 1 ?
                                                <button onClick={()=> mais() }><MdAdd /></button>
                                                :
                                                <button onClick={()=> mais() }><FaCreditCard /></button>
                                            }
                                        </section>
                                        <section>
                                            <button onClick={()=> limparCarrinho()}><RiDeleteBinLine/></button>   
                                            <button onClick={()=> handlePrint()}><GiConfirmed /></button>     
                                        </section>
                                    </>
                                :''}
                            </SHOPP_ORDER_SUMMARY>
                        </LIST_OF_ITEMS_SHOPP>
                    </CONTENT_SHOPP>
                    {buttonOffPrint ? '' :
                        <button onClick={()=> setButtonOffPrint(true)}><LuMenu /></button>
                    } 
                </>
                :
                    <NO_PRODUCT_IN_SHOPP> Sem Produtos <BsCartX /></NO_PRODUCT_IN_SHOPP>
                }
            </CONTAINER_SHOPP>
        </>
    )

}