import Image from "next/image";
import { Draggable } from "@hello-pangea/dnd";
import { DeleteComponentButton } from "@/components/editor/components/Shared/deleteComponent";
import styles from "./headers_statics/template_3.module.css";
import InputImage from "./headers_statics/inputImage";

export const props = {
  unique: true,
  inputs_number: 0,
};

export const InputTemplate = ({ item, index, state, setState }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
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

          <header className={styles.header}>
            <div className={styles.logo}>
              {/* <input
                name="title"
                type="text"
                placeholder="Title"
                className={styles.input + " " + styles.title}
              /> */}
              <InputImage />
            </div>
          </header>
        </div>
      )}
    </Draggable>
  );
};
