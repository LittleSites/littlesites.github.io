import { ComponentTypeList } from "./ComponentTypeList";
import metadata from "@/components/editor/components/metadata";
import sitesCache from "@/libs/utils/cache"

export const ComponentsContent = () => {
    // @ts-ignore
    // Cause metadata its a undefined type and i dont have time to create a interface
    const components: any = metadata.components[ sitesCache.metadata?.site.template.style ];

    return (
        <>
            { Object.keys( components ).map( ( componentType, index ) => {
                
                const componentsTypeList = components[ componentType ];

                return (
                    <ComponentTypeList
                        key = { index }
                        componentType = { componentType }
                        components = { componentsTypeList}
                    />
                );
            })}
        </>
    );
}