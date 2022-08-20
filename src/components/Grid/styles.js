import styled from "styled-components";

export const Table = styled.table`
    width: 48%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;

    svg {
        width: 2rem;
        height: auto;
    }

    @media (max-width: 750px) { 
        width: 90%;

        svg {
            width: 1.5rem;
        }
    }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;