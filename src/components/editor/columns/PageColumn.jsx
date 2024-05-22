import { Droppable } from "@hello-pangea/dnd";
import styled from "styled-components";
import { useState } from "react";
import sitesCache from "@/libs/utils/cache.ts"

const Column = styled.form`
    width: 100%;
    height: 90vh;
    overflow-y: scroll;
`;

export default function PageColumn() {
    const [state, setState] = useState(false);
    const columnItems = sitesCache.metadata.site.template.items;

    return (
        <Droppable droppableId={"page"}>
            {(provided) => (
                <Column
                    // style={{backgroundColor: sitesCache.editor?.props?.backgroundColor}}
                    id="page_template"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {Object.values(columnItems).map((item, index) => {
                        return (
                            <item.InputComponent
                                key={item.id}
                                item={item}
                                index={index}
                                setState={setState}
                                state={state}
                            />
                        );
                    })}
                    {provided.placeholder}
                </Column>
            )}
        </Droppable>
    );
}
