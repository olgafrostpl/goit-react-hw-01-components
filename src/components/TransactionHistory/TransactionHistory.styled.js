import { styled } from "styled-components";

export const Wrapper = styled.table`
    width: 600px;
    margin: 50px auto;
    background-color: white;
    box-shadow: 5px 5px 5px #8080808a;
`;

export const TitleText = styled.th`
    text-transform: uppercase;
    padding: 10px;
    background-color: rgb(254 79 96 / 78%);
    width: 200px;
`;

export const Row = styled.tr`
    background-color: ${props => props.className ? '#ff788421' : '#ff788461'};
`;

export const Value = styled.td`
    text-align: center;
    padding: 4px;
`;