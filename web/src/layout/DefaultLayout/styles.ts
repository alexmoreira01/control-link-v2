import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 150px;
  margin: 0;
  background-color: ${(props) => props.theme["gray-900"]}; 
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 78rem;
  max-width: 78rem;
  height: fit-content;
  
  margin: 3rem auto;
  padding: 2.5rem 2.5rem 0.4rem 2.5rem;

  background: ${(props) => props.theme["gray-750"]};
  border-radius: 8px;

`;