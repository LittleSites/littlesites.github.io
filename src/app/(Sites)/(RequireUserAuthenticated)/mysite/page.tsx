"use client";

import { useEffect, useState } from "react";
import SitesList from "@/components/mysite/sitelist/SitesList";
import { NewSiteSection } from "@/components/mysite/newsite/NewSiteSection";
import { getUserData } from "@/libs/api/auth/getUserData";
import sitesCache from "@/libs/utils/cache";
import SiteManager from "@/libs/api/SiteManager";

export default function Page() {
    const [viewContent, setMySiteViewContent] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const userData = await getUserData();
            sitesCache.userData = userData;

            setMySiteViewContent("missites");
        }

        fetchUserData();
    }, [])

    return (
        <div>
            { viewContent === "missites" && <SitesList setMySiteViewContent={setMySiteViewContent}/> }
            { viewContent === "newsitedata" && <NewSiteSection setMySiteViewContent={setMySiteViewContent}/> }
        </div>
    );
}
