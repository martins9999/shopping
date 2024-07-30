//==================================================================//
import { ButtonMenu, ContainerCartSvg,
    HeaderH, Item, Items, List, MessageAddShopCart,
    MessageRemoveShopCart
} from "./style_Header";
//==================================================================//
import { LuMenu } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";
import { useContext } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { UseContext } from "../../context/context";
import { BsSearch } from "react-icons/bs";
import { GrValidate } from "react-icons/gr";
import { SlClose } from "react-icons/sl";
import { ProductInformationScreen } from "../product_Information_Screen/product_Information_Screen";
import { ShoppingCart } from "../shopping_Cart/shopping_Cart";


function Header () {
    
    
    
    const items = [
        { name:'Ínicio', link:'/', index:'2' },
        { name:'Casinhas e Arranhadores', link:'/products001', index:'0' },
        { name:'Produtos Diversos', link:'/products002', index:'1' },
    ]
    const { openMenu, setOpenMenu, openShoppingCart,
        openProductInformation, setOpenShoppingCart, qttItemsShop,
        emptyCart, search, setSearch, displayAdd, displayRemove,
        closeProductInformation, message, setIndex
    } = useContext(UseContext);


    
    const navigate = useNavigate();

    return (
        <>
            <HeaderH>
            {openProductInformation ? 
                    <ProductInformationScreen />
                    :''}
                
                    { openShoppingCart ?
                        <ButtonMenu onClick={ ()=> {setOpenShoppingCart(false)} }><GoX /></ButtonMenu>
                        :
                        openMenu ?
                                <ButtonMenu onClick={ ()=> setOpenMenu(false) }><GoX /></ButtonMenu>
                            :
                                <ButtonMenu onClick={ ()=> setOpenMenu(true) }><LuMenu /></ButtonMenu>
                    }

                
                <List list={openMenu ? '0' : '-100%'}  onClick={()=>setOpenMenu(false)}>
                    <Items>
                        {items.map((item) => (
                            <Item onClick={()=> {navigate( item.link ); closeProductInformation(); setIndex(item.index)}} key={item.index}>
                                <span>{ item.name }</span>
                                <svg>
                                    <path d="M-5 14 L8 7 L0 3" ></path>
                                </svg>
                            </Item>
                        ))}
                    </Items>
                </List>
                
                <ShoppingCart />
                
                
                {openProductInformation ? 
                    ''
                    :
                    openShoppingCart ?
                        '':
                        openMenu ?
                            '':
                            <section>
                                <input
                                    type="search" value={search}
                                    onChange={ (e)=>setSearch(e.target.value) }
                                    placeholder="Pesquisar produtos"
                                />
                                <BsSearch />
                            </section>
                }
                <ContainerCartSvg>
                    <MessageAddShopCart display={displayAdd ? 'flex' : 'none'}>
                        <span>
                            {message}
                            <span> Adicionado</span>
                        </span>
                        <GrValidate />
                    </MessageAddShopCart>
                    <MessageRemoveShopCart display={displayRemove ? 'flex' : 'none'}>
                        <span>
                            {message}
                            <span> Excluido</span>
                        </span>
                        <SlClose />         
                    </MessageRemoveShopCart>
                    {openMenu ?
                        '':
                            openShoppingCart ?
                                <>
                                    <PiShoppingCart onClick={ ()=> {setOpenShoppingCart(false)} }/>
                                    {emptyCart ?
                                    <span>{qttItemsShop}</span>
                                    :''}
                                </>
                                :
                                <>
                                    <PiShoppingCart onClick={ ()=> setOpenShoppingCart(true) }/>
                                    {emptyCart ?
                                    <span>{qttItemsShop}</span>
                                    :''}
                                </>
                    }
                </ContainerCartSvg>
            </HeaderH> 
        </>
    )
}

export default Header;