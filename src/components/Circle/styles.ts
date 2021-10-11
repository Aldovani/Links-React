import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  transform: translate(-50%, -50%);
  top: 0;
  pointer-events: none;
  left: 0;
  border: 5px solid #ffffff55;
  border-radius: 50%;

  &.sm {
    width: 30px;
    height: 30px;
  }

  @media(max-width: 600px) {
display: none;
  }
`;
