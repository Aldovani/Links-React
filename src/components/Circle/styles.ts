import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  z-index: 3;
  transform: translate(-50%, -50%);
  top: 0;
  pointer-events: none;
  left: 0;
  border: 5px solid white;
  border-radius: 50%;

  box-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #fff,
    0 0 82px #fff;

  &.sm {
    width: 30px;
    height: 30px;
  }
`;
