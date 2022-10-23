import styled from "styled-components";

export const Container = styled.div`
    width: 240px;
    height: 60px;
    display: flex;
    background-image: linear-gradient(90deg, #510CDB 0%, #2B3EDB 100%);
    cursor: pointer;
    opacity: 1;
    transition: all ease .3s;
    font-size: 22px;

    &:hover{
        opacity: 0.9;
        background-image: linear-gradient(90deg, #2B3EDB 0%, #510CDB 100%);
    }

    @media (max-width: 750px){
        width: 75%;
        font-size: 20px;
    }

    @media (max-width: 500px){
        width: 90%;
        font-size: 20px;
    }

    @media (max-width: 550px){
        width: 84%;
        font-size: 22px;
    }
`;

export const IconArea = styled.div`
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(255, 255, 255, .2);
    padding: 0 15px;

`;

export const Icon = styled.img`
    height: 20px;
`;

export const Label = styled.div`
    height: inherit;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0 20px;
`;