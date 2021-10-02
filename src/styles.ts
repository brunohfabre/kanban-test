import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`; 

export const Sidebar = styled.nav`
  background: green;
  width: 256px;
`;

export const Main = styled.main`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Header = styled.header`
  background: blue;
  color: white;
  font-size: 24px;
  background: blue;
  height: 56px;
`;