import { useEffect, useRef, useState } from 'react';
import tippy from 'tippy.js';
import { schema } from "prosemirror-schema-basic"
import { EditorState } from "prosemirror-state"
import { EditorView } from "prosemirror-view"

import { Container } from './styles';

export function Note(): JSX.Element {
  const selectionRef = useRef<HTMLDivElement>(null);

  const [instance] = tippy('#selection-ref', {
    content: 'tooltip',
    sticky: true
  })

  const [values, setValues] = useState({
    left: '0px',
    top: '0px',
    width: '0px',
    height: '0px',
  });

  useEffect(() => {
    let state = EditorState.create({schema})
    
    window.view = new EditorView(document.querySelector("#editor"), {
      state
    });

    window.addEventListener('mouseup', (event) => {
      const selection = window.getSelection();

      if(!selection?.isCollapsed) {
        const { left, top, width, height } = selection?.getRangeAt(0).getBoundingClientRect();

        setValues({
          left: `${left}px`,
          top: `${top}px`,
          width: `${width}px`,
          height: `${height}px`,
        });

        instance.show();
      }
    })
    
    window.addEventListener('mousedown', (event) => {
      if(instance) {
        instance.hide()
      }

      setValues({
        left: '0px',
        top: '0px',
        width: '0px',
        height: '0px',
      });
    })
  }, [])

  console.log('teste');
  
  return (
    <>
      <div ref={selectionRef} id="selection-ref" style={values}></div>

      {/* <Container contentEditable
      onMouseUp={event => {
          const selection = window.getSelection();

          if(!selection?.isCollapsed) {
            const { left, top, width, height } = selection?.getRangeAt(0).getBoundingClientRect();

            setValues({
              left: `${left}px`,
              top: `${top}px`,
              width: `${width}px`,
              height: `${height}px`,
            });

            instance.show();
          }
        }}
        onMouseDown={event => {
          if(instance) {
            instance.hide()
          }

          setValues({
            left: '0px',
            top: '0px',
            width: '0px',
            height: '0px',
          });
        }}
      >
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </Container> */}

      <div id='editor' />
    </>
  )
}