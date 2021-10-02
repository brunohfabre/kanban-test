import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  
  display: flex;
  overflow: auto;
`;

export const List = styled.div`
  width: 320px;
  background: tomato;
  overflow: auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    overflow: auto;
  }
`;

export const Item = styled.div`
  background: gray;
  color: white;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;