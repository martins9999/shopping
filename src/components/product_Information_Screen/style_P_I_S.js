import styled from "styled-components";

export const CONTAINER_P_I_S = styled.div`
    position: fixed;
    top: 50px;
    width: 100%;
    height: calc(100vh - 50px);
    padding: 0 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    min-height: calc(100vh - 50px);
    background-color: #E6E6DC;
    overflow-y: auto;
`;

export const CLOSE_BUTTON_P_I_S = styled.div`
    position: fixed;
    top: 54px;
    display: flex;
    width: 40%;
    > button {
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px blue solid;
        background-color: #306F96;
        color: #FFFFFF;
        transition: .1s;
        font-size: 14px;
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
        width: 98%;
            > button {
                &:hover {
                background-color: #306F96;
                color: #FFFFFF;
                }
            }
    }
`;
export const CONTENT_P_I_S = styled.div`
    width: 40%;
    padding: 20px 0 60px 0;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    box-sizing: border-box;
    min-height: calc()100vh - 50px;
    position: relative;
    > b {
        color: #000;
    }
    > section {
        width: 100%;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        > button {
            margin: 10px 0 0 10px;
            border: none;
            height: 25px;
            padding: 0 15px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px blue solid;
            background-color: #306F96;
            color: #FFFFFF;
            transition: .1s;
            font-size: 14px;
            font-weight: 700;
            gap: 6px;
            cursor: pointer;
            > svg {
                width: 20px;
                height: 20px;
            }
            &:hover {
                background-color: #00468c;
                color: #ffffff;
            }
        }
    }

    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        width: 98%;
        padding: 10px;
        > section {
            > button {
                &:hover {
                background-color: #306F96;
                color: #FFFFFF;
                }
            }
        }
    }
`;
export const TITLE_P_I_S = styled.div`
    margin: 30px 0 10px 0;
    padding-left: 10px;
    width: 100%;
    color: #000;
    font-size: 23px;
    font-weight: 700;
    font-style: italic;
`;
export const IMG_P_I_S = styled.img`
    width: 100%;
    height: 350px;
`;
export const DESCRIPTION_P_I_S = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    color: #000;
    padding-left: 10px;
    > h6 {
        font-size: 17px;
    }
    > b {
        font-size: 18px;
        height: 25px;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    > div {
        color: #009F46;
        font-size: 18px;
        font-weight: 700;
        height: 25px;
        display: flex;
        align-items: center;
        gap: 6px;
    }
    > span {
        color: rgb(80,80,80);
        font-size: 13px;
        font-weight: 600;
        
    }
    > section {
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 17px;
        text-align: center;
        padding: 6px 0;
        gap: 5px;
        > img {
            width: 200px;
            height: 15px;
            border-radius: 6px;
        }
    }
`;
export const CODE_ID_P_I_S = styled.div`
    display: flex;
    gap: 15px;
    > span {
        color: rgb(90,90,90);
    }
`;
export const BUTTON_OPEN_OPTIONS = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 10px;

    > button {
        display: flex;
        align-items: center;
        width: 40%;
        height: 45px;
        background-color: rgb(238,238,238);
        border: none;
        border-radius: 8px;
        cursor: pointer;
        > div {
            width: 90%;
            padding-left: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 3px;
            > img {
                width: 80%;
                height: 14px;
            }
        }
        > svg {
            width: 10%;
            fill: transparent;
            stroke-width: 1px;
            width: 10px;
            height: 14px;
            stroke: blue;
        }
    }
`; 
export const OPTION_BUTTONS_CONTAINER = styled.div`
    position: fixed;
    top: 50px;
    width: 39.55%;
    height: calc(100vh - 50px);
    display: ${props => props.display};
    flex-direction: column;
    justify-content: flex-end;
    background-color: rgba(0,0,0,.4);
    color: #000000;
    > section {
        width: 100%;
        height: 50%;
    }
`;
export const OPTION_BUTTONS_CONTENT = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 50%;
    padding: 5px 5px 60px 5px;
    box-sizing: border-box;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    > img {
        width: 100px;
        height: 12px;
    }
    > section {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        > button {
            background-color: rgb(0,140,255);
            color: #ffffff;
            padding: 5px 80px;
            border: none;
            cursor: pointer;
        }
    }
`;
export const CONTENT_BUTTON_SELECT = styled.div`
    padding: 5px;
    display: grid;
    width: 50%;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 8px;
    row-gap: 8px;
`;
export const BUTTON_SELECT = styled.div`
    border: ${props => props.border};
    color: #000000;
    border-radius: 7px;
    width: 80px;
    height:25px;
    padding: 3px;
    box-sizing: border-box;
    display:flex;
    justify-content:center;
    align-items: center;
    cursor: pointer;
    > img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
`;
