import styled from 'styled-components';

export const Content = styled.div`
  flex: 1;
  display: flex;
  overflow-x: auto;
  gap: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  width: 320px;
  background: gray;
  flex-shrink: 0;

  > header {
    padding: 8px;
  }
  
  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 128px;

    overflow-y: auto;
  }
`;

export const Item = styled.div`
  flex-shrink: 0;
  padding-bottom: 8px;

  > div {
    height: 92px;
    background: tomato;
  }
`;