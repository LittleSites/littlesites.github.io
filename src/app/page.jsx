"use client";

import { useRouter } from "next/navigation";

import HeaderCom from "@/components/general/header";
import Footer from "@/components/general/Footer";
import WhiteBox from "@/components/cards/WhiteBox.tsx";
import "@/styles/globals.css";
import styles from "@/styles/pages/sites/Home.module.css";
import { useState, useEffect } from "react";
import SiteManager from "@/libs/api/SiteManager";



export default function HomePage() {
    const [sites, setSites] = useState({});
    
    const router = useRouter();
    const goToSite = (siteId) => {
        router.push(`/site/${siteId}`);
    }

    useEffect(() => {
        const getSites = async () => {
            const sites = await SiteManager.getRandomSites();
            setSites(sites);
        };

        getSites();
    }, []);

    return (
        <>
            <HeaderCom />
            <main className={styles.Home}>
                <section className={styles.Home__Title}>
                    <h1 className="cate">Negocios</h1>
                </section>

                <section className={styles.Home__Sites}>
                    {
                        Object.entries(sites).map(
                            (site) => 
                            <WhiteBox
                                key={site[1].id}
                                title={site[1].name}
                                img={site[1].logo_url}
                                onClick={() => goToSite(site[1].id)}
                            /> )
                    }
                </section>
            </main>
            <Footer />
        </>
    );
}
