'use client'

import sitesCache from "@/libs/utils/cache"

import styles from './deleteComponent.module.css'

export const DeleteComponentButton = ({ index, setState, state }) => {

    const handleDeleteComponent = event => {
        event.preventDefault();

        delete sitesCache.metadata.site.template.items.splice(index, 1);

        setState(!state);
    }

    return (
        <div>
            {
                state != undefined 
                ? (
                    <button 
                        className={ styles[`delete-button`] }
                        onClick={handleDeleteComponent}></button>
                )
                : ''
            }
        </div>
    )
}