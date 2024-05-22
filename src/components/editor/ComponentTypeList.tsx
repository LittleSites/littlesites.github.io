import { Droppable } from "@hello-pangea/dnd";
import { ComponentTypeLabel } from "./ComponentTypeLabel";
import styles from "@/styles/pages/editor/ComponetColumn.module.css";
import style from "@/styles/pages/editor/ComponentTypeList.module.css"

export const ComponentTypeList = ({ componentType, components }: any) => {
    
    return(
        <Droppable
            key={ componentType }
            droppableId={ componentType }
            isDropDisabled={ true }
        >

            { ( provided ) => (

                <details
                    className={ style.styleComponents }
                    key={ componentType }
                    ref={ provided.innerRef }
                    { ...provided.droppableProps }
                >
                    <summary className={style.compTypeTitle}>{ componentType }</summary>
                    <div className={ styles.styleList }>

                        { Object.values( components ).map(

                            ( item, index ) => {
                                return (

                                    <ComponentTypeLabel
                                        key={ index }
                                        item={ item }
                                        index={ index }
                                        componentType={
                                            componentType
                                        }
                                    />

                                );
                            }

                        )}

                    </div>
                    { provided.placeholder }
                </details>
            )}
            
        </Droppable>
    )
}