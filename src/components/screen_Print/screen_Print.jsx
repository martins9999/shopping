import { useContext } from "react";
import { UseContext } from "../../context/context";
//==============================================================//
import { ButtonScreenPrint, ContainerItemScreenPrint,
         ContainerScreenPrint, ContentScreenPrint,
         PaymentOptions, SectionScreenPrint
        } from "./style_S_P";
//==============================================================//
import { IoMdDownload } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";

export const ScreenPrint = ({amount, valueInPix}) => {

    const { shoppingCart, formatCurrency,
        openShoppingCart, setShopCartScreenPrint, contentDocument,
        handlePrint, installmentCounter, totalWithInterest, installmentValue,
    } = useContext(UseContext);

    return (
            <>
                <ContainerScreenPrint display={openShoppingCart  ? '' : 'none' }>
                    <SectionScreenPrint ref={contentDocument} className="content">
                        <ContentScreenPrint>
                            {
                                shoppingCart.map((item) => (
                                    <ContainerItemScreenPrint key={item.newId}>
                                        <img alt="" src={item.productShopp.productInfo.imag}  />
                                        <section>
                                            <b>{item.productShopp.productInfo.title}</b>
                                            <span>{item.newId} {item.newCode}</span>          
                                            <span>
                                                <span>{formatCurrency(item.productShopp.productInfo.value * 1)}</span>
                                                <b>{item.quantity} {item.quantity > 1 ? ' Unidades ' : ' Unidade '} {formatCurrency(item.quantity * item.productShopp.productInfo.value)}</b>
                                            </span>
                                        </section>
                                    </ContainerItemScreenPrint>
                                ))
                            }
                            <PaymentOptions>
                                <span>À Vista {formatCurrency(amount)}</span>
                                <span>No Pix {formatCurrency(valueInPix)}</span>
                                {installmentCounter > 1 ?
                                <span><FaCreditCard /> {formatCurrency(totalWithInterest)} em {installmentCounter} x {formatCurrency(installmentValue)} </span>
                                    :''}
                                <b>Consultar valor do frete ao enviar pedido</b>
                            </PaymentOptions>
                        </ContentScreenPrint>
                    </SectionScreenPrint>
                    <ButtonScreenPrint>
                        <button onClick={()=> setShopCartScreenPrint(true)}><RiCloseLargeFill /></button>
                        <button onClick={()=> handlePrint()}><IoMdDownload /></button>
                    </ButtonScreenPrint>
                </ContainerScreenPrint>
            </>
    )
}