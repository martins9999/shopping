import styled from "styled-components";

export const PAGE_CONTAINER = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #306F96;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PAGE_CONTENT = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BANNER = styled.div`
    border-radius: 8px;
    margin-top: 50px;
    width: 94%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    > img {
        width: 80%;
        height: 100%;
    }   
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        height: 100px;
        > img {
            width: 100%;
            height: 100%;
        }
    }
`;
export const PRODUCT_CONTAINER = styled.div`
    border-radius: 8px;
    margin-top: 20px;
    width: 97%;
    display: grid;
    min-height: ${props => props.mh};
    background-color: rgb(225,225,225);
    grid-template-columns: repeat(8, 1fr);
    row-gap: 20px;
    column-gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    @media only screen and (min-device-width : 769px) and (max-device-width : 1366px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        grid-template-columns: repeat(2, 1fr);
        width: 95%;
        row-gap: 5px;
        column-gap: 5px;
        padding: 20px 4px;
    }
`;

export const PRODUCT_CONTENT = styled.div`
    border-radius: 6px;
    width: 100%;
    height: 240px;
    padding: 5px;
    box-sizing: border-box;
    background-color: #f5f5f5;
    color: #00468c;
    display: flex;
    flex-direction: column;
    border: rgb(190,190,190) 1px solid;
    cursor: pointer;
    transition: .2s;
    &:hover {
        background-color: #ffffff;
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        &:hover {
            background-color: #f5f5f5; 
        }
    }
`;

export const PRODUCT_IMAGE = styled.img`
    width: 100%;
    height: calc(100% - 55px);
`;

export const PRODUCT_DESCRIPTION = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    font-size: 13px;
    > b {
        height: 35px;
    }
    > span {
        height: 20px;
        display: flex;
        align-items: center;
        gap: 6px;
        font-weight: 700;
    }
`;