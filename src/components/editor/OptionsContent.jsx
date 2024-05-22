import sitesCache from "@/libs/utils/cache.ts";
import { use, useEffect, useState } from "react";
import styled from "styled-components";
import styles from "@/styles/components/general/Input.module.css"

const CircleColor = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    box-sizing: inherit;
    border-radius: 100%;
    border: 1px solid black;
    margin: .2rem;
`;

const ColorPicker = styled.div`
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
`;

const AddColorImage = styled.img`
    width: 100%;
`

const ColorPickerInput = styled.input`
    display: none;
`

export const OptionsContent = () => {
    // const [siteName, setSiteName] = useState(sitesCache.metadata.site.name);
    const [colorsList, setColorsList] = useState(null);

    const getRandomColors = (numberOfColors) => {
        const colores = [];
        for (let i = 0; i < numberOfColors; i++) {
            // Generar un color hexadecimal aleatorio
            const color =
                "#" + Math.floor(Math.random() * 16777215).toString(16);
            colores.push(color);
        }
        return colores;
    };

    const handleChangueSiteName = (event) => {
        event.preventDefault();

        sitesCache.metadata.site.name = event.target.value;
    };

    // const openColorPicker = event => {
    //     event.preventDefault();

    //     const colorPicker = document.getElementById("editor-background-colorPicker");
    //     colorPicker.click();
    // }

    // const handleSelectColor = event => {
    //     event.preventDefault();

    //     const color = event.target.value;
    //     const newColorsList = [...colorsList];
        
    //     newColorsList.shift();
    //     newColorsList.push(color);
    //     setColorsList(newColorsList);
    // }

    // const handleChangueSiteBackground = (event, color) => {
    //     event.preventDefault();
    // }

    useEffect(() => {
        const addRandomColors = () => {
            setColorsList(getRandomColors(9));
        }

        addRandomColors();
    }, [])

    return (
        <div>
            <div>
                <label>Nombre del site:</label>
                <br />
                <input
                    type="text" 
                    className={styles.whiteInput}
                    onChange={handleChangueSiteName} 
                    defaultValue={sitesCache.metadata.site.name}
                />
            </div>
            {/* TO-DO
            <div>
                <label>Color de fondo:</label>
                <ColorPicker>
                    { colorsList && Object.values(colorsList).map((color, index) => {
                        return (
                            <CircleColor
                                key={index}
                                style={{ backgroundColor: color }}
                                onClick={(event) => {
                                    handleChangueSiteBackground(event, color)
                                }}
                            />
                        );
                    })}
                    <CircleColor>
                        <AddColorImage 
                            src={"https://img.icons8.com/ios-glyphs/100/plus-math.png"}
                            alt="add color"
                            onClick={openColorPicker}
                        />
                    </CircleColor>

                    <ColorPickerInput id="editor-background-colorPicker" type="color" onChange={handleSelectColor}/>
                </ColorPicker>
            </div> */}
        </div>
    );
};
