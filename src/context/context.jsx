import {createContext, useRef, useState } from "react";
import {useReactToPrint } from "react-to-print";
import { products } from "../components/listProducts/listProducts";

export const UseContext = createContext();

export const UseStorage = ({children}) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openShoppingCart, setOpenShoppingCart] = useState(false)
    const [shoppingCart, setShoppingCart] = useState([])
    const [qttItemsShop, setQttItemsShop] = useState()
    const [emptyCart, setEmptyCart] = useState(false)
    const [search, setSearch] = useState('')

    const [installmentCounter, setInstallmentCounter ] = useState(1)
    const [installmentValue, setInstallmentValue ] = useState('')
    const [totalWithInterest, setTotalWithInterest ] = useState('')
    const [message, setMessage ] = useState('')


    const [productInformation, setProductInformation] = useState([])
    const [openProductInformation, setOpenProductInformation] = useState(false)

    const [index, setIndex ] = useState(2)
    const [selectId, setSelectId] = useState()
    const [selectCode, setSelectCode] = useState()
    const [selectValue, setSelectValue] = useState()
    const [selectValuePix, setSelectValuePix] = useState()
    const [selectMeasure, setSelectMeasure] = useState()

    const [buttonOffPrint, setButtonOffPrint] = useState(true)
//=================================================================================================================//
    const newProducts =  products[[index]].map((it) => {
        return {
            ...it, value: it.measure_1 ?? undefined ? (it.value[0] * 0.15 + it.value[0]).toFixed(2) : (it.value * 0.15 + it.value).toFixed(2),
            valuePix: it.measure_1 ?? undefined ? ((it.value[0] * 0.15 + it.value[0]) - (it.value[0] *  0.15 + it.value[0]) * 0.05).toFixed(2) :
            ((it.value * 0.15 + it.value) - (it.value *  0.15 + it.value) * 0.05).toFixed(2),
            id_1: it.id[0], code_1: it.code[0], value_1: it.value[0],
            id_2: it.id[1], code_2: it.code[1], value_2: it.value[1],
            id_3: it.id[2], code_3: it.code[2], value_3: it.value[2],
            id_4: it.id[3], code_4: it.code[3], value_4: it.value[3]
        }
    })
//=================================================================================================================//
//=================================================================================================================//
    const formatCurrency = (valor) =>{
        return valor.toLocaleString('pt-br', {
            style: 'currency', currency:'BRL'
        })
    }
//=================================================================================================================//
//=================================================================================================================//
    let timePrint = 1;
    let checarTimePrint;    
    const contentDocument =useRef()

    const handlePrint = () => {
        setButtonOffPrint(false)
        checarTimePrint = setInterval(p, 10);
        timePrint -- ;
        function p () {
            if (timePrint === 0) {
                clearInterval(checarTimePrint); 
                print()       
            }
        }
    } 
    const print = useReactToPrint({
        content: () => contentDocument.current,
    })
//=================================================================================================================//

//=================================================================================================================//
    const viewProductInformation = (id, code, color, value, measure) => {
        setOpenProductInformation(true);
        const item = newProducts.find((it) =>
            it.id === id ||
            it.id_1 === id ||
            it.id_2 === id ||
            it.id_3 === id ||
            it.id_4 === id
        );
        
        setSelectId(id)
        setSelectCode(code)
        setSelectValue((value * 0.15 + value).toFixed(2))
        setSelectValuePix(((value * 0.15 + value) - (value *  0.15 + value) * 0.05).toFixed(2))
        setSelectMeasure(measure)
        setButtonSelect_2(1)
         
        setChangeCode(code[0]);
        setChangeId(id[0]);
        setChangeColor(color)
        
        
        const pdtIt = {productInfo: item};
        const newInformation = [pdtIt];
        setProductInformation(newInformation);
    };
//=================================================================================================================//

//=================================================================================================================//
    const closeProductInformation = () => {
        setOpenProductInformation(false);
        setProductInformation([]);
        setSelectId(0)
        setSelectCode(0)
        setSelectValue(0)
        setButtonSelect_1(0) 
    }
//=================================================================================================================//

//=================================================================================================================//
    const [buttonSelect_1, setButtonSelect_1] = useState(0)
    const [buttonSelect_2, setButtonSelect_2] = useState(0)

    function atualizarInformation (index, id, code, color, value, pix) {
        setSelectId(index)
        setSelectCode(index)
        setSelectValue(index)
        setButtonSelect_1(index) 
        setProductInformation([])
        viewProductInformation(id, code, color, value, pix)      
    }
//=================================================================================================================//
//=================================================================================================================//


    const [displayAdd, setDisplayAdd] = useState(false)
    const [displayRemove, setDisplayRemove] = useState(false)

    let messageTimerAdd = 1;
    let checarMessageTimerAdd;

    function timeMessageAdd () {
        messageTimerAdd -- ;
        if (messageTimerAdd === 0) {
            clearInterval(checarMessageTimerAdd);
            setDisplayAdd(false)        
        }
    }

   
    const adicionarItem = (title , id, code, color, measure) => {
        setInstallmentCounter(1);
        setMessage(title);
        if(displayAdd === false){
            setDisplayAdd(true);
            checarMessageTimerAdd = setInterval(timeMessageAdd, 900);
        }
        setQttItemsShop(1);
        setEmptyCart(true);
        if(qttItemsShop >= 1) {setQttItemsShop(qttItemsShop + 1)};

        

        const item = productInformation.find((it) =>
            it.productInfo.id === id ||

            it.productInfo.id_1[0] === id ||
            it.productInfo.id_1[1] === id ||
            it.productInfo.id_1[2] === id ||
            it.productInfo.id_1[3] === id ||
            it.productInfo.id_1[4] === id ||
            it.productInfo.id_1[5] === id ||
            it.productInfo.id_1[6] === id ||
            it.productInfo.id_1[7] === id ||

            it.productInfo.id_2[0] === id ||
            it.productInfo.id_2[1] === id ||
            it.productInfo.id_2[2] === id ||
            it.productInfo.id_2[3] === id ||
            it.productInfo.id_2[4] === id ||
            it.productInfo.id_2[5] === id ||
            it.productInfo.id_2[6] === id ||
            it.productInfo.id_2[7] === id ||

            it.productInfo.id_3[0] === id ||
            it.productInfo.id_3[1] === id ||
            it.productInfo.id_3[2] === id ||
            it.productInfo.id_3[3] === id ||
            it.productInfo.id_3[4] === id ||
            it.productInfo.id_3[5] === id ||
            it.productInfo.id_3[6] === id ||
            it.productInfo.id_3[7] === id ||

            it.productInfo.id_4[0] === id ||
            it.productInfo.id_4[1] === id ||
            it.productInfo.id_4[2] === id ||
            it.productInfo.id_4[3] === id ||
            it.productInfo.id_4[4] === id ||
            it.productInfo.id_4[5] === id ||
            it.productInfo.id_4[6] === id ||
            it.productInfo.id_4[7] === id
        );


        const alreadyInShoppingCart = shoppingCart.find((it) => {return it.newId === id});
        if (alreadyInShoppingCart) {
            const newShoppingCart = shoppingCart.map((it) => {  
                if(it.newId === id) {return  {...it, quantity: it.quantity + 1}};
                return it;
            })
            setShoppingCart(newShoppingCart);
            return;
        }
        const productItem = {
            productShopp: item, quantity: 1, newId: id, newCode: code,
            newValue: selectValue, newValuePix: selectValuePix,
            newColor: color, newMeasure: measure
        };
        const newShoppingCart = [...shoppingCart, productItem];
        setShoppingCart(newShoppingCart);

    }
//==========================================================================================================//

//==========================================================================================================//
    const [changeId, setChangeId] = useState()
    const [changeCode, setChangeCode] = useState()
    const [changeColor, setChangeColor] = useState()
//==========================================================================================================//

//==========================================================================================================//

    let messageTimerRemove = 1;
    let checarMessageTimerRemove;

    function timeMessageRemove () {
        messageTimerRemove -- ;
        if (messageTimerRemove === 0) {
            clearInterval(checarMessageTimerRemove);
            setDisplayRemove(false)        
        }
    }
    const removerItem = (id, title) => {
        setInstallmentCounter(1);
        setMessage(title);
        if(displayRemove === false){
            setDisplayRemove(true);
            checarMessageTimerRemove = setInterval(timeMessageRemove, 900);
        }
        if(qttItemsShop >= 1) {
            setQttItemsShop(qttItemsShop - 1);
            if(qttItemsShop <= 1) {
                setEmptyCart(false);
                setOpenShoppingCart(false);
            }
        }
        const alreadyInShoppingCart = shoppingCart.find((item) => item.newId === id);

        if (alreadyInShoppingCart && alreadyInShoppingCart.quantity > 1) {
            const newShoppingCart = shoppingCart.map((item) => {
                if(item.newId === id) {return {...item, quantity: item.quantity - 1}};
                return item;
            })
            setShoppingCart(newShoppingCart);
            return;
        }
        const newShoppingCart = shoppingCart.filter((item) => 
            item.newId !== id);
        setShoppingCart(newShoppingCart);

    }
//==========================================================================================================//

const limparCarrinho = () => {
    setOpenShoppingCart(false)
    setShoppingCart([])
    setQttItemsShop()
    setEmptyCart(false)
}

//==========================================================================================================//

return (
    <UseContext.Provider value={{
        handlePrint,
        contentDocument,
        shoppingCart,
        setShoppingCart,
        openShoppingCart,
        setOpenShoppingCart,
        openMenu,
        setOpenMenu,
        adicionarItem,
        removerItem,
        limparCarrinho,
        formatCurrency,
        emptyCart,
        atualizarInformation,
        selectId, selectCode,
        selectValue, selectValuePix,
        selectMeasure, buttonSelect_1,
        buttonSelect_2, setButtonSelect_2,

        changeId, setChangeId,
        changeCode, setChangeCode,
        changeColor, setChangeColor,

        buttonOffPrint, setButtonOffPrint,

        qttItemsShop,
        search,
        setSearch,
        setProductInformation,
        installmentCounter,
        installmentValue,
        setInstallmentValue,
        totalWithInterest,
        setTotalWithInterest,

        setInstallmentCounter,

        displayAdd,
        displayRemove,
        productInformation,
        openProductInformation,
        viewProductInformation,
        closeProductInformation,
        message,
        index,
        setIndex
    }}>
        {children}
    </UseContext.Provider>
)
}