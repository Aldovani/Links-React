import styled from "styled-components";

export const Container = styled.main`
  display: flex;

  align-content: center;
  justify-content: center;
  gap: 1.3rem;
  max-width: 700px;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;

`;

export const ParticulesContainer = styled.div`
  position: absolute;
  left:0;
  width:100%;
height: 100vh;
top:0;
z-index: 0;
`
