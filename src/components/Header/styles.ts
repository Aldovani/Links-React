import styled from "styled-components";

export const Container = styled.header`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  h1,
  h2 {
    color: #fefbfb;
    font-family: "Poppins";
  }
  h2 {
    font-weight: 400;
    color: #c9c9c9;
  }

  @media (max-width: 600px) {
    h1,
    h2 {
      font-size: 1.5rem;
    }
  }
`;
