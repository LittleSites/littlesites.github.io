import sitesCache, { Site } from "@/libs/utils/cache";
import { serializeImage } from "../utils/serializer";
import { API_URL, USER_TOKEN } from "./env";
import { fireSuccessAlert } from "../misc/alerts/successAlert";

export default class SiteManager {
    static async saveSiteImages(siteImages: any, siteId: number) {
        const siteTemplate = sitesCache.metadata?.site.template;

        for (const img of siteImages) {
            const image_serialized = await serializeImage(img.file);

            img.file = image_serialized;
            img.siteId = siteId;

            const response = await fetch(`${API_URL}/saveSiteImage/`, {
                method: "POST",
                mode: "cors",
                headers: {
                    Authorization: `Token ${USER_TOKEN}`,
                    "Content-type": "application/json",
                },
                body: JSON.stringify(img),
            });

            const data = await response.json();

            img.url = data.url ? data.url : "";

            //@ts-ignore
            siteTemplate.items[img.compIndex].values.images[img.inputName] =
                img.url;
        }

        return await this.updateSite({
            id: siteId,
            template: JSON.stringify(siteTemplate),
        });
    }

    static async saveSiteLogo(siteId: number, logo: any) {
        const file = await serializeImage(logo);

        const response = await fetch(`${API_URL}/saveLogo/`, {
            method: "POST",
            mode: "cors",
            headers: {
                Authorization: `Token ${USER_TOKEN}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                siteId,
                file,
            }),
        });

        const data = response.ok ? await response.json() : undefined;

        if (data.url != undefined) return data.url;
        throw new Error("La respuesta no contiene la url del logo.");
    }

    static async updateSite(site: Site) {
        const siteId = site.id;

        const response = await fetch(`${API_URL}/site/${siteId}/`, {
            method: "PATCH",
            mode: "cors",
            headers: {
                Authorization: `Token ${USER_TOKEN}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(site),
        });

        return response.ok;
    }

    static async saveSite(site: Site) {
        site.template = JSON.stringify(site.template);

        const response = await fetch(`${API_URL}/site/`, {
            method: "POST",
            mode: "cors",
            headers: {
                Authorization: `Token ${USER_TOKEN}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(site),
        });

        const data = response.ok ? await response.json() : undefined;

        if (data.id != undefined) return data.id;
        throw new Error("La respuesta no contiene la id del site.");
    }

    static async getSite(siteId: number) {
        const response = await fetch(`${API_URL}/getSite/` + siteId, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();
        const site = JSON.parse(data.template);

        return site;
    }

    static async getUserSites(userId: number, deleteTemplate = true) {
        const response = await fetch(`${API_URL}/getUserSites/` + userId, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            if (response.status === 404) throw new Error("NoSites");
        }

        const data = await response.json();

        if (deleteTemplate) delete data.template;

        return data;
    }

    static async getRandomSites( numberOfSites: number = 3 ) {
        const response = await fetch(`${API_URL}/random/sites/${numberOfSites}`, {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            if (response.status === 404) throw new Error("NoSites");
        }

        const data = await response.json();

        return data;
    }

    static async deleteSite(siteId: number) {
        const response = await fetch(`${API_URL}/site/${siteId}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                Authorization: `Token ${USER_TOKEN}`,
            }
        });

        if (response.ok) fireSuccessAlert("Site eliminado exitosamente.");
    }
}
