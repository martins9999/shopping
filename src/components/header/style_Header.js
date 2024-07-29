import styled from "styled-components";

export const HeaderH = styled.header`
    width: 100%;
    height: 50px;
    background-color: #306F96;
    color: #ffffff;
    stroke: #ffffff;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    > section {
        position: absolute;
        left: 27%;
        width: 250px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > input {
            border-radius: 8px;
            width: 90%;
            height: 25px;
            border: #BDD7EE solid 1px;

        }
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        section {
            left: 40px;
        }
    }
`;
export const LogoImg = styled.div`
    width: 57px;
    height: 100%;
    > img {
        width: 100%;
        height: 100%;
    }
`;
export const ButtonMenu = styled.div`
    position: absolute;
    left: 5px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #00468c;
    }
    > svg {
        width: 28px;
        height: 28px;
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        &:hover {
            background-color: #306F96;
        }
    }
`;
export const List = styled.div`
    position: absolute;
    top: 50px;
    width: 100%;
    left: ${ props => props.list };
    height: calc(100vh - 50px);
    background-color: rgb(0,0,0,.5);
`;
export const Items = styled.div`
    padding: 20px;
    box-sizing: border-box;
    width: 300px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #306F96;   
`;

export const Item = styled.div`
    padding-left: 12px;
    height: 25px;
    border-radius: 7px;
    gap: 7px;
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #00468c;
    }
    > svg {
        fill: transparent;
        stroke-width: 1px;
        width: 10px;
        height: 14px;
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        &:hover {
            background-color: #306F96;
        }
    }
`;
export const ContainerCartSvg = styled.div`
    position: absolute;
    right: 38%;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: #00468c;
    }
    > svg {
        width: 28px;
        height: 28px;
        cursor: pointer;
    }
    > span {
        position: absolute;
        top: -8px;
        left: 12px;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        color: #FFFFFF;
    }
    @media only screen and (min-device-width : 300px) and (max-device-width : 599px) {
        right: 20px;
        &:hover {
            background-color: #306F96;
        }
    }
`;
export const MessageAddShopCart = styled.div`
    display: ${props => props.display };
    position: absolute;
    right: 30px;
    top: 2px;
    width: 300px;
    border-radius: 5px;
    padding: 7px 0;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: #ACFF7D;
    color: #000;
    border: #000 solid 1px;
    font-size: 13px;
    font-weight: 700;
    > span {
        width: 85%;
        display: flex;
        flex-direction: column;
    }
    > svg {
        width: 18px;
        height: 18px;
    }
`;
export const MessageRemoveShopCart = styled.div`
    display: ${props => props.display };
    position: absolute;
    right: 30px;
    top: 2px;
    width: 300px;
    border-radius: 5px;
    padding: 7px 0; 
    justify-content: center;
    align-items: center;
    gap: 6px;
    background-color: #FF2237;
    color: #FFFFFF;
    border: #FFFFFF solid 1px;
    font-size: 13px;
    font-weight: 700;
    > span {
        width: 85%;
        display: flex;
        flex-direction: column;
    }
    > svg {
        width: 18px;
        height: 18px;
    }
`;