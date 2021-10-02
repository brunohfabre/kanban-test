import { Content, Column, Item } from './styles';

export function Kanban(): JSX.Element {
  return (
    <Content>
      <Column>
        <header>column title</header>

        <div>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
        </div>
      </Column>

      <Column>
        <Item>item 1</Item>
      </Column>

      <Column>
        <header>column title</header>

        <div>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
          <Item>item 1</Item>
        </div>
      </Column>

      <Column>
        <Item>item 1</Item>
      </Column>

      <Column>
        <Item>item 1</Item>
      </Column>

      <Column>
        <Item>item 1</Item>
      </Column>
    </Content>
  )
}