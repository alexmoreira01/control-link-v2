import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }

  
`;

export const ButtonImport = styled.button`
  border: 0;
    padding: 0.6rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["gray-100"]};

    gap: 0.4rem;
    font-weight: bold;

    cursor: pointer;

    background: ${(props) => props.theme["green-500"]};

    &:not(:disabled):hover {
      background: ${(props) => props.theme["green-700"]};
    }
`;
