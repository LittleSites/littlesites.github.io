"use client";

import styles from "@/styles/pages/editor/editor.module.css"

import PageColumn from "@/components/editor/columns/PageColumn";
import HeaderCom from "@/components/general/header";
import metadata from "@/components/editor/components/metadata";
import { EditorMenu } from "@/components/editor/Menu";

import sitesCache from "@/libs/utils/cache.ts"
import { getDestinationIndex } from "@/libs/utils/dnd/destination";
import { refactorItem, refactorSite } from "@/libs/utils/dnd/refactors";

import SiteManager from "@/libs/api/SiteManager";
import { getReorderedItem } from "@/libs/utils/dnd/sorting";

import { DragDropContext } from "@hello-pangea/dnd";
import { useState } from "react";
import { useRouter } from "next/navigation";


export const Editor = () => {
    const router = useRouter();
    const [menuContent, setMenuContent] = useState("empty");

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const site = sitesCache.metadata.site;
        const { source, destination } = result;
        const pageItems = site.template.items;
        const destinationItem = pageItems[destination.index];
        const style = site.template.style;

        const reorderedItem = getReorderedItem(
            source,
            destination,
            metadata,
            pageItems,
            style
        );

        if (reorderedItem === false) return;

        destination.index = getDestinationIndex(
            destination.index,
            reorderedItem,
            destinationItem,
            source,
            pageItems
        );

        pageItems.splice(destination.index, 0, reorderedItem);
    };

    const handleSaveSite = (event) => {
        event.preventDefault();

        // Refactor the site to get a clean copy
        const site = sitesCache.metadata.site;
        const siteTemplate = refactorSite(site.template);
        let siteImages = [];

        // Traverse the list of items Site Components) to modify and save their values.(
        siteTemplate.items.forEach((item, index) => {
            // Get the component values
            let componentId = item.id;
            let component = document.getElementById(componentId);
            let componentInputs = component.querySelectorAll("input, textarea");

            // Refactor the item to get a clean copy
            item = refactorItem(item);

            Object.values(componentInputs).map(async (input) => {
                // Add images data to an array that will be sent later
                if (input.type === "file") {
                    const file = input.files[0];

                    siteImages.push({
                        compIndex: index,
                        inputName: input.name,
                        file: file,
                    });

                    return;
                }

                // Handle both inputs and textareas
                if (input.tagName === "INPUT") {
                    item.values.texts[input.name] = input.value;
                } else if (input.tagName === "TEXTAREA") {
                    item.values.texts[input.name] = input.value;
                }

                // item.values.texts[input.name] = input.value;
            });
        });


        try {

            const id = site.id;
            const name = site.name;

            site.template = siteTemplate;

            SiteManager.updateSite({
                id,
                name,
                template: JSON.stringify(site.template),
            }).then(ok => {
                if (ok) SiteManager.saveSiteImages(siteImages, site.id).then(ok => {
                    if (ok) router.push(`/site/${id}`);
                });
            });

        } catch (error) {

            console.log(error);

        }
    };

    return (
        <div className={styles.editor}>
            <DragDropContext onDragEnd={handleDragEnd} >
                <HeaderCom 
                    editor={true}
                    displayLogo={false}
                    setMenuContent={setMenuContent}
                    handleSaveSite={handleSaveSite}
                />
                <section className={styles.main}>
                    <EditorMenu menuContent={menuContent} />
                    <PageColumn />
                </section>
            </DragDropContext>
        </div>
    );
};
