import mainStyle from "@/styles/components/mysite/newsite/NewSiteData.module.css";
import SiteNameSection from "./SiteNameSection";
import SelectLogoSection from "./SelectLogoSection";

export default function DataSection({setSiteName, setSiteLogo, siteName, logo}: any) {
    return (
        <section className={mainStyle.formSection}>
            <SiteNameSection setSiteName={setSiteName} siteName={siteName}/>
            <SelectLogoSection setSiteLogo={setSiteLogo} logo={logo}/>
        </section>
    );
};
