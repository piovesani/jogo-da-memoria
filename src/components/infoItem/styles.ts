import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 20px 0;
    padding: 10px;

    @media (max-width: 750px){
        width: 30%;
        margin: auto;
    }

    @media (max-width: 500px){
        width: 70%;
        margin-left: 10px;
    }
`;

export const Label = styled.div`
    font-size: 22px;
    color: linear-gradient(90deg, #2B3EDB 0%, #510CDB 100%);
`;

export const Value = styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #510CDB;
`;