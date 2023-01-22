import styled from "styled-components";

export const TextBox = styled.div`
display: flex;
flex-direction: column;

label {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input {
    all: unset;
    display: inline-flex;
    /* width: 100%; */
    height: 35px;
    flex: 1 1 0%;
    padding: 0.7rem 0.9rem;
    
    align-items: center;
    justify-content: center;
    
    font-size: 15px;
    line-height: 1.6;
    
    border-radius: 4px;
    box-shadow: ${(props) => props.theme["gray-200"]} 0px 0px 0px 1px;
    
    color: ${(props) => props.theme["gray-100"]};
    background: ${(props) => props.theme["gray-700"]};
}
`;
