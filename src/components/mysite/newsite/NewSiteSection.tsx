import { createRef, useState } from "react";
import mainStyle from "@/styles/components/mysite/newsite/NewSiteData.module.css";
import MainButton from "@/components/buttons/MainButton";
import DataSection from "./sitedata/DataSection";
import sitesCache, { Site } from "@/libs/utils/cache";
import { StyleSection } from "./sitestyle/StyleSection";
import SiteManager from "@/libs/api/SiteManager";
import { serializeImage } from "@/libs/utils/serializer";
import { useRouter } from "next/navigation";
import { fireErrorAlert } from "@/libs/misc/alerts/errorAlert";

export const NewSiteSection = ({ setMySiteViewContent }: any) => {
    const router = useRouter();
    const [views] = useState(["sitedata", "sitestyle"]);
    const [viewIndex, setViewIndex] = useState(0);

    const [newSiteContent, setNewSiteContent] = useState(views[viewIndex]);

    const [siteName, setSiteName] = useState(undefined);
    const [logo, setSiteLogo] = useState(undefined);
    const [style, setStyle] = useState(undefined);

    const verifySiteData = () => {
        if (siteName === undefined) {
            fireErrorAlert("Debes ingresar un nombre para tu site.");
            return false;
        }

        if (logo === undefined) {
            fireErrorAlert("Debes cargar un logo para tu site.");
            return false;
        }

        if (style === undefined) {
            fireErrorAlert("Debes seleccionar un estilo para tu site.");
            return false;
        }

        return true;
    };

    const handleContinue = async () => {
        const newViewIndex = viewIndex + 1;

        if(newViewIndex > 1) {
            if(verifySiteData()) {
                const site = sitesCache.metadata?.site as Site;
                const siteId = await SiteManager.saveSite(site);
                const logo_url = await SiteManager.saveSiteLogo(siteId, logo);

                delete site.name;
                delete site.template;
                delete site.user;

                site.id = siteId;
                site.logo_url = logo_url;

                SiteManager.updateSite(site).then( ok => {
                    if ( ok ) router.push('/editor');
                })

                return;
            }

            return;
        }

        setNewSiteContent(views[newViewIndex]);
        setViewIndex(newViewIndex);
    };

    const handleReturn = () => {
        const newViewIndex = viewIndex - 1;

        if (newViewIndex < 0) {
            setMySiteViewContent("missites");
            return;
        }

        setNewSiteContent(views[newViewIndex]);
        setViewIndex(newViewIndex);
    };

    sitesCache.metadata = {
        site: {
            user: sitesCache.userData?.id,
            name: siteName,
            template: {
                style,
                items: []
            },
            logo_url: "",
        }
    }

    return (
        <div>
            <section className={mainStyle.navSection}>
                <h2 className={mainStyle.title}>
                    {newSiteContent === "sitedata" && "Datos del site"}
                    {newSiteContent === "sitestyle" && "Estilo a usar"}
                </h2>
                <div className={mainStyle.navButtonsSection}>
                    <button
                        className={mainStyle.returnButton}
                        onClick={handleReturn}
                    >
                        {newSiteContent === views[0]
                            ? "Descartar cambios"
                            : "Regresar"}
                    </button>
                    <MainButton onClick={handleContinue}>Continuar</MainButton>
                </div>
            </section>
            {newSiteContent === "sitedata" && (
                <DataSection
                    setSiteName={setSiteName}
                    setSiteLogo={setSiteLogo}
                    siteName={siteName}
                    logo={logo}
                />
            )}
            {newSiteContent === "sitestyle" && (
                <StyleSection 
                    setStyle={setStyle} 
                    siteStyle={style}
                />
            )}
        </div>
    );
};
