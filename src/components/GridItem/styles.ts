import styled from "styled-components";

type ContainerProps = {
    showBackground: boolean;
}
export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.showBackground === true? 'transparent' : '#E6EFFF'};
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

type IconProps = {
    opacity?: number;
}
export const Icon = styled.img<IconProps>`
    width: 80px;
    height: 80px;
    opacity: ${props => props.opacity ? props.opacity : 1}
`;