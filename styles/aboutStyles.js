import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 0 0 auto;
  padding: 20px 15%;
  font-size: 20px;
  margin: auto;

  &:first-child {
    width: 150px;
  }
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 30%;
  max-height: 300px;
  max-width: 300px;
  min-height: 100px;
  min-width: 100px;
  margin: 0px 20px 10px;
`;
