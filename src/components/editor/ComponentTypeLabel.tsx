import { Draggable } from "@hello-pangea/dnd";
import styles from "@/styles/pages/editor/ComponetColumn.module.css";
import React from "react";

interface ComponentTypeListProps {
    item: any;
    index: number;
    componentType: string;
}

export const ComponentTypeLabel = ( { item, index, componentType }: ComponentTypeListProps ) => {
    return (
        <Draggable key={ index } draggableId={ item.id } index={ index }>
            { ( provided, snapshot ) => (
                <div
                    key={ index }
                    className={
                        snapshot.isDragging
                            ? styles.componentDragging
                            : styles.component
                    }
                    { ...provided.draggableProps }
                    { ...provided.dragHandleProps }
                    ref={ provided.innerRef }
                    id={ item.id }
                >
                    <img
                        className={ styles.componentIcon }
                        src="https://img.icons8.com/ios-glyphs/100/braille.png"
                    />
                    <p className={ styles.componentTitle }>
                        { componentType } { index + 1 }
                    </p>
                </div>
            ) }
        </Draggable>
    );
};