import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px;
    width: 25%;
    cursor: default;
    border: 1px solid transparent;
    transition: all .5s ease-in-out;

    &:hover {     
        border-color: black;
    }

    p {
        font-size: .9rem;
    }

    span {
        font-size: 1.2rem;
    }

    @media (max-width: 750px) {
        width: 20%;

        span {
            font-size: .9rem;
        }
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    gap: 10px;

    svg {
        width: auto;
        height: 1.4rem;
    }

    @media (max-width: 750px) { 
        svg {
            width: 1rem;
        }
    }
`;

export const Headertitle = styled.p`
    font-size: 20px;
`;

export const Total = styled.span`
    font-size: 30px;
    font-weight: bold;
`;