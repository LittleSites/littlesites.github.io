'use client'
import "@/styles/globals.css";

import { Editor } from "@/components/editor/Editor.jsx";
import sitesCache from "@/libs/utils/cache"
import SiteManager from "@/libs/api/SiteManager";
import { useEffect, useState } from "react";
import verifiyUser from "@/libs/api/auth/verifyUser";
import { fireErrorAlert } from "@/libs/misc/alerts/errorAlert";
import { getUserData } from "@/libs/api/auth/getUserData";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const [isSiteFetched, setIsSiteFetched] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            const isAuthenticated = await verifiyUser();

            if ( !isAuthenticated ) {
                fireErrorAlert('Para acceder a esta página necesitas iniciar sesión.');
                router.push("/login");

                return;
            }

            const userData = await getUserData();
            const userId = userData.id;
            let siteGet;

            try {
                siteGet = await SiteManager.getUserSites(userId, false);
            } catch (e) {
                if (e.toString() === "Error: NoSites") {
                    fireErrorAlert("Aún no creas un site para editar.");
                    router.push('/mysite');
                    return;
                }
            }

            sitesCache.userData = userData;

            sitesCache.metadata = {
                site: siteGet
            }
            sitesCache.metadata.site.template = JSON.parse(sitesCache.metadata.site.template);
            sitesCache.metadata.site.template.items = [];

            setIsSiteFetched(true);
        }

        fetchUserData();
    }, [])
    
    return (
        <div>
            {isSiteFetched && <Editor />}
        </div>
    );
};
