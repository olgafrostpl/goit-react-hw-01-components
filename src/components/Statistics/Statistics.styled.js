import { styled } from "styled-components";

export const Wrapper = styled.div`
    width: 242px;
    margin: 50px auto;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
`;

export const TitleList = styled.h2`
    text-transform: uppercase;
    font-size: 16px;
    padding: 20px 0;
`;

export const List = styled.ul`
    display: flex;
    border: 1px solid black;
    justify-content: space-around;
`;

export const ListItems = styled.li`
    width: 48px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

