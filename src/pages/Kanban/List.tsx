import React, { useState, useEffect } from 'react';
import { Droppable, DroppableProvided, DroppableStateSnapshot, Draggable, DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';
import { Virtuoso } from 'react-virtuoso';

import { Column, Item } from './styles';

interface ListProps {
  listId: string;
  listType: string;
  items: string[];
}

export function List({ listId, listType, items }: ListProps): JSX.Element {
  const HeightPreservingItem = React.useMemo(() => {
    return ({ children, ...props }: any) => {
      return (
        // the height is necessary to prevent the item container from collapsing, which confuses Virtuoso measurements
        <div {...props} style={{ height: props['data-known-size'] || undefined }}>
          {children}
        </div>
      )
    }
  }, [])

  return (
    <Column>
      <header>{listId}</header>

      <Droppable droppableId={listId} type={listType} mode='virtual' renderClone={(provided, snapshot, rubric) => (
        <Item
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            {items[rubric.source.index]}
          </div>
        </Item>
      )}>
        {(dropProvided: DroppableProvided, dropSnapshot: DroppableStateSnapshot) => (
          <Virtuoso
            components={{
              Item: HeightPreservingItem,
            }}
            scrollerRef={dropProvided.innerRef}
            data={items}
            itemContent={(index, item) => (
              <Draggable key={item} draggableId={item} index={index}>
                {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
                  <Item ref={dragProvided.innerRef} {...dragProvided.draggableProps} {...dragProvided.dragHandleProps}>
                    <div>
                      {item}
                    </div>
                  </Item>
                )}
              </Draggable>
            )} />
          // <div ref={dropProvided.innerRef} {...dropProvided.droppableProps}>
          //   {items.map((item, index) => (
          //     <Draggable key={item} draggableId={item} index={index}>
          //       {(dragProvided: DraggableProvided, dragSnapshot: DraggableStateSnapshot) => (
          //         <Item ref={dragProvided.innerRef} {...dragProvided.draggableProps} {...dragProvided.dragHandleProps}>
          //           {item}
          //         </Item>
          //       )}
          //     </Draggable>
          //   ))}
          //   {dropProvided.placeholder}
          // </div>
        )}
      </Droppable>
    </Column>
  )
}