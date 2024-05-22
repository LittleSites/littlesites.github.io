import { UserData } from "@/libs/api/auth/authTypes"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //



interface SiteProps {
    backgroundColor?: string;
}

interface SiteData {
    props?: SiteProps;
    style: string | undefined;
    items: any[];
}

export interface Site {
    id?: number;
    user?: number | undefined;
    name?: string | undefined;
    template?: SiteData | string | undefined;
    logo_url?: string | undefined
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //



interface SiteMetadata {
    site: Site;
    components?: any;
}

interface Cache {
    userData?: UserData;
    metadata?: SiteMetadata;
    vars?: any[];
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //



const sitesCache: Cache = {};

export default sitesCache;