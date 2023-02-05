import styled from "styled-components";

export const LinkContainer = styled.main`
  flex: 1;
  padding: 3rem 2rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }

`;

export const LinkHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    /* width: 100%; */
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

    background: ${(props) => props.theme["green-500"]};

    &:not(:disabled):hover {
      background: ${(props) => props.theme["green-700"]};
    }
  }
`;

export const LinkList = styled.div`
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    margin-top: 1.3rem;

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 25%;
        border-top-left-radius: 6px;
        padding-left: 1.5rem;
      }

      &:nth-last-child(3) {
        width: 55%;
      }

      &:nth-last-child(2) {
        width: 20%;
      }

      &:last-child {
        width: 0%;
        border-top-right-radius: 6px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 0.9rem;
      font-size: 0.875rem;
      line-height: 1.6;

      a {
        color: ${(props) => props.theme["gray-100"]};
        text-decoration: none;
      }

      &:first-child {
        width: 20%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;


        button {

          color: ${(props) => props.theme["gray-100"]};
          background-color: transparent;

          cursor: pointer;
          border: none;

          &:hover {
            color: ${(props) => props.theme["green-300"]};;
          }

          box-shadow: 0 0 0 0;
        
        }
      }
    }
  }
`;

export const ButtonsActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonTrashIcon = styled.button`
  &:hover {
    color: ${(props) => props.theme["red-500"]} !important;
  }
`;





