"use client"
import "@/styles/globals.css";
import styles from "./site.module.css";

import metadata from "@/components/editor/components/metadata";
import SiteManager from "@/libs/api/SiteManager";
import { useEffect, useState } from "react"

export default function Page( { params }: { params: { siteId: number } } ) {
    let site: any = undefined;
    const [ siteStyle, setSiteStyle ] = useState( null );
    const [ pageItems, setPageItems ] = useState( null );

    useEffect( () => {
        const getSite = async () => {
            site = await SiteManager.getSite( params.siteId );
            // @ts-ignore
            setSiteStyle( metadata.components[ site?.style ] );
            setPageItems( site.items );
        }

        getSite();
    }, []);

    return (
        <section className={ styles[`site-default`] }>
            { pageItems && Object.values( pageItems ).map( ( item, index) => {
                // @ts-ignore
                const itemCompTypeList = siteStyle[item.compType];
                // @ts-ignore
                const ComponentItem = itemCompTypeList[item.style_number];

                // @ts-ignore
                return <ComponentItem.StaticComponent key={index} values={item.values}/>;
            })}
        </section>
    )
}