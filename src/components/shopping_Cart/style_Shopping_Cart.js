import styled from "styled-components";

export const CONTAINER_S_C = styled.div`
    position: fixed;
    top: 50px;
    width: 100%;
    height: calc(100vh - 50px);
    left: 0;
    display: ${ props => props.display };
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    background-color: #305496;
    box-sizing: border-box;
`;
export const NO_PRODUCT_IN_S_C = styled.div`
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

export const LIST_ITEMS_S_C = styled.div`
    background-color: rgb(250,250,240);
    position: relative;
    overflow-y: auto;
    height: calc(100vh - 190px);
    width: 40%;
    left: 0;
    display: ${ props => props.display };
    flex-direction: column;
    gap: 5px;
    padding: 10px 6px;
    box-sizing: border-box;

    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        width: 100%;
    }
    @media only screen and (min-device-width : 600px) and (max-device-width : 1366px) {
        width: 50%;
    }
`;
export const ITEM_S_C = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    height: 90px;
    box-sizing: border-box;
    border: rgb(40,40,140) .5px solid;
    color: rgb(40,40,140);
    display: flex;
    border-radius: 6px;
    gap: 5px;
    transition: .5s;
    > img {
        width: 15%;
        height: 100%;
        border-radius: 10px;
        padding: 7px;
        box-sizing: border-box;
    }
 @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
    > section {
        width: 22%;
    }
 }
`;
export const DESCRIPTION_S_C= styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1.5px;

    >section {
        font-size: 12.5px;
        font-weight: 700;
        width: 100%;
        padding-left: 6px;
        display: flex;
        align-items: center;
        gap: 8px;
        > div {
            color: #000;
        }
        > span {
            display: flex;
            gap: 4px;
            width: 40%;
            > div {
                color: #000;
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
                border: 1px blue solid;
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
export const SUMMARY_S_C = styled.div`
    width: 40%;
    height: 190px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    gap: 2px;
    color: #000;
    font-weight: 700;
    font-size: 16px;
    > section {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 8px;
        > section {
            color: ${props => props.color};
        }
        > svg {
            margin-top: 2px;
        }
        > button {
            margin: 3px 0;
            border: none;
            height: 17px;
            padding: 0 10px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px blue solid;
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
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        width: 100%;
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

