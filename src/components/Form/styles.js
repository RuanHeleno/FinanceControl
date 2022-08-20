import styled from "styled-components";

export const Container = styled.div`
    max-width: 1120px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 15px 0px;
    gap: 10px;

    @media (max-width: 750px) { 
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const label = styled.label`
    cursor: pointer;
`;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        margin-right: 5px;
        accent-color: black;
        margin-top: 0;
        cursor: pointer;
    }

`;

export const Button = styled.button`
    padding: 5px 10px;
    border: 2px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: teal;
    text-transform: uppercase;
    transition: all .5s ease-in-out;

    &:hover {
        border-color: black;
        opacity: .9;
    }
`;