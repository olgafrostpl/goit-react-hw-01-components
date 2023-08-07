import { styled } from "styled-components";
 
export const Container = styled.div`
    width: 240px;
    margin: 10px auto;
    background-color: white;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Image = styled.img`
    width: 100px;
    height:100%;
    border-radius: 50%;
    margin-top: 20px;
`;

export const List = styled.ul`
    display: flex;
    border: 1px solid black;
    justify-content: space-around;
    margin-top: 10px;
    background-color: rgb(254 79 96 / 78%);
`;

export const ListItems = styled.li`
    width: 80px;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`;

export const Span = styled.span`
    font-weight: 700;
`;