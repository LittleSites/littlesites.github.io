import style from "@/styles/pages/editor/Menu.module.css"
import { ComponentsContent } from "@/components/editor/ComponentsContent";
import { OptionsContent } from "@/components/editor/OptionsContent"

export const EditorMenu = ( { menuContent }:any ) => {



    return menuContent != "empty" ? (
        <div className={style.menu}>
            <h2 className={style.title}>{menuContent}</h2>

            {/* Child Content */}
            { menuContent === "Componentes" && <ComponentsContent/> }
            { menuContent === "Opciones" && <OptionsContent /> }

        </div>
    ): null;
};
