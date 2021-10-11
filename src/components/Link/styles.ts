import styled from "styled-components";

export const Link = styled.a`
  height: 100px;
  color: #fefbfb;

  font: 500 1.5rem "Poppins";

  width: 325px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  border-radius: 8px;
  text-decoration: none;

  &:hover {
    border: 3px solid #fefbfb;
    text-decoration: underline wavy;
  }

  &.github {
    background-image: radial-gradient(
      circle farthest-corner at -4% -12.9%,
      rgba(74, 98, 110, 1) 0.3%,
      rgba(30, 33, 48, 1) 90.2%
    );
    background-image: linear-gradient(
      110.3deg,
      rgba(73, 93, 109, 1) 4.3%,
      rgba(49, 55, 82, 1) 96.7%
    );
  }

  &.twitter {
    background-image: radial-gradient(
      circle farthest-corner at 22.4% 21.7%,
      rgba(4, 189, 228, 1) 0%,
      rgba(2, 83, 185, 1) 100.2%
    );
  }
  &.linkedin {
    background: rgb(10, 102, 170);
    background: linear-gradient(
      90deg,
      rgba(10, 102, 170, 1) 0%,
      rgba(10, 102, 194, 1) 100%
    );
  }
  &.email {
    background-image: linear-gradient(
      76.3deg,
      rgba(44, 62, 78, 1) 12.6%,
      rgba(69, 103, 131, 1) 82.8%
    );
    background: hsla(221, 59%, 75%, 1);

    background: linear-gradient(
      90deg,
      hsla(221, 59%, 75%, 1) 0%,
      hsla(216, 40%, 58%, 1) 100%
    );
  }
  &.instagram {
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 40%,
      #cc2366 75%,
      #bc1888 100%
    );
  }
  &.portfolio {
    background-image: linear-gradient(
      99deg,
      rgba(115, 18, 81, 1) 10.6%,
      rgba(28, 28, 28, 1) 118%
    );
    background-image: linear-gradient(
      110deg,
      #e6b0ff 0,
      #be90f2 25%,
      #8f6cd8 50%,
      #5a4bbf 75%,
      #0133ab 100%
    );
  }
  &.disable {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const Container = styled.div`
  display: flex;

  align-content: center;
  justify-content: center;
  gap: 1.3rem;
  max-width: 700px;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
`;
