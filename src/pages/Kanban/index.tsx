import { useState } from 'react';
import { DragDropContext, DraggableLocation } from 'react-beautiful-dnd';

import { List } from './List';

import { Content } from './styles';

interface OnDragEndData {
  source: DraggableLocation;
  destination: DraggableLocation | undefined;
}

export function Kanban(): JSX.Element {
  const [columns, setColumns] = useState({
    'column 1': ['item 1', 'item 2', 'item 3'],
    'column 2': ['item 4'],
    'column 3': [],
    'column 4': ['item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10', 'item 11', 'item 12', 'item 13', 'item 14', 'item 15', 'item 16', 'item 17', 'item 18', 'item 19', 'item 20'],
    'column 5': [],
    'column 6': [],
  });

  function onDragEnd({ source, destination }: OnDragEndData): void {
    if(!destination) {
      return;
    }

    if(source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const current = columns[source.droppableId as keyof typeof columns];
    const next = columns[destination.droppableId as keyof typeof columns];
    const target = current[source.index];

    if(source.droppableId === destination.droppableId) {
      const items = current;

      const [removed] = items.splice(source.index, 1);
      items.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: items,
      });
  
      return;
    }

    current.splice(source.index, 1);
    next.splice(destination.index, 0, target);

    setColumns({
      ...columns,
      [source.droppableId]: current,
      [destination.droppableId]: next,
    });
  }

  return (
    <DragDropContext onDragEnd={({ source, destination }) => onDragEnd({ source, destination })}>
      <Content>
        {Object.entries(columns).map(([key, value]) => (
          <List
            key={key}
            listId={key}
            listType="CARD"
            items={value}
          />
        ))}
      </Content>
    </DragDropContext>
  )
}