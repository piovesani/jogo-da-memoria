import styled from 'styled-components';

export const Body = styled.div`
    background-image: linear-gradient(90deg, #510CDB 0%, #514BDB 35%, #2B3EDB 100%);
    height: 100vh;
    display: flex;
    justify-content: center;

    @media (max-width: 450px) and (max-height: 920px){
        height: auto;
    }
    
`;
export const Container = styled.div`
    background-color: #fff;
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 10px;

    @media (max-width: 750px){
        flex-direction: column;
    }

    @media (max-width: 500px){
        margin: 10px 0;
        width: 90%;
    }
    `;

export const Info = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: auto;


    @media (max-width: 750px){
        margin-bottom: 50px;
        align-items: center;
    }
`;

export const LogoLink = styled.a``;

export const InfoArea = styled.div`
    width: 100%;
    margin: 10px 0;

    @media (max-width: 750px){
        display: flex;
        justify-content: center;
        margin: 0 20px;
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px){
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
`;

export const Grid = styled.div`
    width: 430px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    @media (max-width: 750px){
        grid-template-columns: repeat(3, 1fr);
        padding: 0 20px;
    }
`;