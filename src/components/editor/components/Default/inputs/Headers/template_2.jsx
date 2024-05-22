import { Draggable } from "@hello-pangea/dnd";
import { DeleteComponentButton } from "@/components/editor/components/Shared/deleteComponent";
import InputImage from "./headers_statics/inputImage";
import styles from "./headers_statics/template_2.module.css";
import defaultIcon from "public/images/applegay.png";

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
              <InputImage defaultIcon={defaultIcon} />
            </div>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <input
                    name="acercade"
                    type="text"
                    className={styles.input}
                    placeholder="Acerca de"
                  />
                </li>
                <li className={styles.navItem}>
                  <input
                    name="servicios"
                    type="text"
                    className={styles.input}
                    placeholder="Servicios"
                  />
                </li>
                <li className={styles.navItem}>
                  <input
                    name="contacto"
                    type="text"
                    className={styles.input}
                    placeholder="Contacto"
                  />
                </li>
              </ul>
            </nav>
          </header>
        </div>
      )}
    </Draggable>
  );
};
