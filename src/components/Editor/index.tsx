import { useState } from 'react';

import { Item } from './Item';

import { Container } from './styles';

// import ContentEditable from 'react-contenteditable'

// export function Note(): JSX.Element {
//   const [value, setValue] = useState('');

//   return (
//     <Container>
//       <ContentEditable
//         html={value}
//         onChange={event => setValue(event.target.value)}
//         onKeyDown={event => console.log('DOWN', event)}
//         onKeyUp={event => console.log('UP', event)}
//       />
//     </Container>
//   )
// }

export function Editor(): JSX.Element {
  const [items, setItems] = useState([]);

  return (
    <Container>
      {items.map(item => (
        <Item />
      ))}
    </Container>
  )
}