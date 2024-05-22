"use client";

import MainButton from "@/components/buttons/MainButton";
import { SiteCard } from "@/components/mysite/sitelist/SiteCard";
import SiteManager from "@/libs/api/SiteManager";
import { getUserData } from "@/libs/api/auth/getUserData";
import sitesCache from "@/libs/utils/cache";
import style from "@/styles/components/mysite/sitelist/SiteList.module.css";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SitesList( { setMySiteViewContent }: any ) {
    const router = useRouter();
    const [userSites, setUserSitesIds] = useState(null);
    const [hasSites, setHasSites] = useState(false);

    const handleCreateSite = () => {
        setMySiteViewContent('newsitedata')
    };

    const deleteSite = (siteId: number) => {
        SiteManager.deleteSite(siteId);
        // @ts-ignore
        userSites.pop();
        setHasSites(false);
        router.refresh();
    }

    useEffect(() => {
        const fetchUserData = async () => {
            let result: any;

            try {
                result = await SiteManager.getUserSites(sitesCache.userData?.id as number);
                setHasSites(true)
            } catch (e) {
                if (e === "NoSites") setHasSites(false);
                return;
            }

            // @ts-ignore
            setUserSitesIds([result]);
        }

        fetchUserData();
    }, [])

    return (
        <div>
            <section className={style.createSection}>
                <h2 className={style.title}>Mis sites</h2>

                {!hasSites && <MainButton onClick={handleCreateSite}>
                    Crear nuevo site
                </MainButton>}

            </section>

            <section className={style.sites}>
                {userSites &&
                    Object.values(userSites).map(
                        (value: any, index: number) => {
                            console.log(userSites);

                            return (
                                <SiteCard
                                    key={index}
                                    siteLogo={value.logo_url}
                                    siteName={value.name}
                                    siteId={value.id}
                                    deleteSite={deleteSite}
                                />
                            );
                        }
                    )}
            </section>
        </div>
    );
}
