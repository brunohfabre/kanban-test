import { BrowserRouter } from 'react-router-dom';

import 'tippy.js/dist/tippy.css';

import { Routes } from './routes';

import GlobalStyle from './styles/global';

import { Container, Sidebar, Main, Header } from './styles';

export function App(): JSX.Element {
  return (
    <Container>
      <GlobalStyle />
      
      <Sidebar>
        sidebar
      </Sidebar>

        <Main>
          <Header>header</Header>

          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Main>
    </Container>
  )
}