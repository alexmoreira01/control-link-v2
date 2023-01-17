import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-content: center; */
  /* flex-wrap: wrap; */
  
 
  height: 150px;
  margin: 0;
  background-color: ${(props) => props.theme["gray-900"]}; 


 
`;

export const ContainerContent = styled.div`
  width: 74rem;
  max-width: 74rem;
  height: calc(100vh - 8rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme["gray-750"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;