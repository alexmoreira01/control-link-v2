import styled from "styled-components";


export const ModalContainer = styled.div`
    display: none;

`;

const BaseButton = styled.button`
    border: 0;
    padding: 0.7rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["gray-100"]};

    gap: 0.4rem;
    font-weight: bold;

    cursor: pointer;
`;

export const ModelContent = styled.div`
    width: 450px;
    height: 300px;

    padding: 2.5rem;
    
    position: absolute;
    margin:0 auto;
    display:table;
    left: 0;
    right:0;
    top: 300px; 

    line-height: 1.6;
    
    border-radius: 9px;
    /* border:1px solid; */

    background-color: ${(props) => props.theme["gray-800"]};
    
    -webkit-transform:translateY(-50%);
    -moz-transform:translateY(-50%);
    -ms-transform:translateY(-50%);
    -o-transform:translateY(-50%);
    transform:translateY(-50%);

    z-index: 99999;
    
    h2 {
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 1.5rem;
        line-height: 1.6;
        ${(props) => props.theme["gray-100"]};
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin-top: 2rem;

        
        .button-dialog-cancel {
            border: 0;
            padding: 0.7rem;
            border-radius: 6px;

            display: flex;
            align-items: center;
            justify-content: center;
            color: ${(props) => props.theme["gray-100"]};

            gap: 0.4rem;
            font-weight: bold;

            cursor: pointer;

            background: ${(props) => props.theme["gray-400"]};

            &:not(:disabled):hover {
            background: ${(props) => props.theme["gray-500"]};
            }

        }
    }

    
`;

export const ButtonCreate = styled(BaseButton)`
    background: ${(props) => props.theme["green-500"]};

    &:not(:disabled):hover {
    background: ${(props) => props.theme["green-700"]};
}
`;

export const ButtonDelete = styled(BaseButton)`
    background: ${(props) => props.theme["red-500"]};

    &:not(:disabled):hover {
    background: ${(props) => props.theme["red-700"]};
}
`;


