import styled from "styled-components";
import header from "../../../../assets/headerBg.png";

export const Container = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${header}) no-repeat center;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 5rem;
  }
`;
