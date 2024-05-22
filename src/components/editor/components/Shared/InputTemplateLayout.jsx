import { Draggable } from "@hello-pangea/dnd";
import { DeleteComponentButton } from "@/components/editor/components/Shared/deleteComponent";

export default function InputTemplateLayout({ item, index, state, setState, className, children }) {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          // className={`${className} ${styles.template_1}`}
          className="editor_component"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          id={item.id}
        >
          <DeleteComponentButton
            index={index}
            setState={setState}
            state={state}
          />

          { children }

        </div>
      )}
    </Draggable>
  )
}
