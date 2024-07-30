import styled from "styled-components";

export const CONTAINER_SHOPP = styled.div`
    position: fixed;
    top: 50px;
    width: 100%;
    height: calc(100vh - 50px);
    padding: 0 600px;
    box-sizing: border-box;
    background-color: #305496;
    display: ${ props => props.display};
    overflow-y: auto;

    > button {
        position: fixed;
        left: calc(50% - 18px);
        bottom: 75px;
        border: none;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #306F96;
        color: #FFFFFF;
        transition: .1s;
        font-size: 22px;
        font-weight: 700;
        font-style: italic;
        gap: 6px;
        cursor: pointer;
        &:hover {
            background-color: #00468c;
            color: #ffffff;
        }
    }
    
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        padding: 5px 0;
    }
    @media only screen and (min-device-width : 600px) and (max-device-width : 1500px) {
        padding: 0 300px;
    }
`;
export const CONTENT_SHOPP = styled.div`
    min-height: 100vh;
    width: 100%;
    
    padding: 5px;
    box-sizing: border-box;
    border-radius: 8px;
    position: relative;
`;
export const LIST_OF_ITEMS_SHOPP = styled.div`
    border: #35DADA solid 4px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: calc(100vh - 10px);
    padding: 10px;
    box-sizing: border-box;
    background-color: #f9f9f5;
    border-radius: 8px;
`;

export const NO_PRODUCT_IN_SHOPP = styled.div`
    font-size: 70px;
    font-weight: 900;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    > svg {
        width: 150px;
        height: 150px;
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        font-size: 50px;
    }
`;
export const SHOPP_PRODUCT_CONTAINER = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    color: #000000;
    border-bottom: 1px solid #00468c;
    > img {
        width: 17%;
        height: 100%;
        border-radius: 10px;
        padding: 2px;
        box-sizing: border-box;
    }
 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    > img {
        width: 25%;
        height: 100%;
        border-radius: 10px;
        padding: 2px;
        box-sizing: border-box;
    }
 }
`;
export const DESCRIPTION_PRODUCT_SHOPP= styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1.5px;
    >section {
        font-size: 12px;
        font-weight: 700;
        width: 100%;
        padding-left: 6px;
        display: flex;
        align-items: center;
        gap: 8px;
        > div {
            color: #00468c;
        }
        > span {
            display: flex;
            gap: 4px;
            width: 40%;
            > div {
                color: #00468c;
            }
        }
        > img {
            width: 80px;
            height: 12px;
            border-radius: 3px;
        }
        > section {
            display: flex;
            gap: 10px;
            > svg {
                border: none;
                height: 15px;
                padding: 0 6px;
                border-radius: 6px;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #306F96;
                color: #FFFFFF;
                transition: .1s;
                font-size: 13px;
                font-weight: 700;
                gap: 6px;
                cursor: pointer;
                > svg {
                    width: 20px;
                    height: 15px;
                }
                &:hover {
                    background-color: #00468c;
                }
            }
        } 
        >svg {
            width: 20px;
            height: 20px;
            cursor: pointer;
            color: #833C0C;
        }
    }
    >b {
        padding-left: 6px;
        font-size: 14.5px;
        >preco {
            color: green;
        }

    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        width: 80%;
        > section {
            > span {
                width: 67%;
            }
        }
        > section {
            > section {
                > svg {
                    &:hover {
                    background-color: #306F96;
                    }
                }
            }
        }
    }
`;
export const SHOPP_ORDER_SUMMARY = styled.div`
    width: 100%;
    height: 190px;
    margin-top: auto;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    gap: 2px;
    color: #000;
    font-weight: 700;
    font-size: 16px;
    > b {
        width: 100%;
        text-align: center;
        font-size: 17px;
        color: #ff00ff;
    }
    > section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 8px;
        > section {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 3px;
        }
        > svg {
            margin-top: 2px;
        }
        > button {
            border: none;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #306F96;
            color: #FFFFFF;
            transition: .1s;
            font-size: 22px;
            font-weight: 700;
            font-style: italic;
            gap: 6px;
            cursor: pointer;
            &:hover {
                background-color: #00468c;
                color: #ffffff;
            }
        }
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        width: 100%;
        > button {
            &:hover {
                background-color: #306F96;
            }
        }
        > section {
            > button {
                &:hover {
                background-color: #306F96;
                }
            }
        }
    }
    @media only screen and (min-device-width : 600px) and (max-device-width : 1366px) {
        width: 50%;
    }
`;

