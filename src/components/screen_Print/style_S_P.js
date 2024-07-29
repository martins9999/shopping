import styled from "styled-components";

export const ContainerScreenPrint = styled.div`
    position: fixed;
    top: 50px;
    width: 100%;
    height: calc(100vh - 50px);
    padding: 0 600px;
    box-sizing: border-box;
    background-color: #305496;
    display: ${ props => props.display};
    overflow-y: auto;
    
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        padding: 5px 0;
    }
    @media only screen and (min-device-width : 600px) and (max-device-width : 1500px) {
        padding: 0 300px;
    }
`;
export const SectionScreenPrint = styled.div`
    min-height: 100vh;
    background-color: #35DADA;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 8px;
    position: relative;
`;

export const ContentScreenPrint = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: calc(100vh - 10px);
    padding: 10px;
    box-sizing: border-box;
    background-color: #FFFFE6;
    border-radius: 8px;
`;
export const ContainerItemScreenPrint = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    border-bottom: 1px solid rgb(200,200,200);

    > img {
        width: 55px;
        height: 100%;
        background-color: #EEEEEE;
    }
    > section {
        display: flex;
        flex-direction: column;
        width: calc(100% - 60px);
        height: 100%;
        font-size: 13.5px;
        font-weight: 500;
        color: rgb(80,80,80);
        padding-left: 6px;
        
        > span {
            display: flex;
            gap: 6px;
            
        }
    }
`;
export const ButtonScreenPrint = styled.div`
    display: flex;
    gap: 10px;
    position: fixed;
    right: 35%;
    bottom: 40px;
    > button {
        border: none;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #306F96;
        border: 1px blue solid;
        font-size: 14px;
        font-weight: 700;
        font-style: italic;
        gap: 6px;
        cursor: pointer;
        > svg {
            animation: flot 1s infinite linear;
            box-sizing: border-box;
            width: 90%;
            height: 90%;
        }
    }
    @keyframes flot {
        0% {
            color: #DCDCDC;
        }
        50% {
            color: #FFFFFFFF;
        }
        100% {
            color: #DCDCDC;
        }
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        flex-direction: column;
        right: 5%;
    } 
`;
export const PaymentOptions = styled.div`
    width: 100%;
    height: 100px;
    background-color: #F0F0F0;
    color: #000;
    margin-top: auto;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    border-radius: 10px;
    font-size: 17px;
    font-weight: 500;
    > b {
        color: #7030A0;
    }
    > span {
        display: flex;
        align-items: center;
        gap: 6px;
        > svg {
            margin-top: 2px;
        }
    }
`;