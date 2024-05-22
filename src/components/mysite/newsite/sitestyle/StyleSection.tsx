import style from "@/styles/components/mysite/sitestyle/SiteStyle.module.css";
import { StyleCard } from "./StyleCard";
import sitesCache from "@/libs/utils/cache";

export const StyleSection = ({ setStyle, siteStyle}: any) => {
    const dummyData = [
        {   
            title: "Default",
            style: "Empresarial",
            img: "https://www.bypeople.com/wp-content/uploads/2020/08/ecommerce-templates-ui-kit-pack-deals-bypeople-featured.jpg",
            isPremium: false,
            content: "Headers, Footers, Carruseles, Acerca de",
        },
        {
            title: "Empresarial",
            style: "Default",
            img: "https://www.bypeople.com/wp-content/uploads/2021/08/html-dashboard-templates.png",
            isPremium: false,
            content: "Headers, Footers, Carruseles, Acerca de",
        },
    ];

    sitesCache.userData?.isPremium

    return (
        <section className={style.stylesList}>
            {Object.values(dummyData).map((stylecardinfo, index) => {
                const isStyleSelected = stylecardinfo.style === siteStyle;
                return (
                    <StyleCard
                        key={index}
                        imgSrc={stylecardinfo.img}
                        title={stylecardinfo.title}
                        styleName={stylecardinfo.style}
                        isPremium={stylecardinfo.isPremium}
                        content={stylecardinfo.content}
                        setStyle={setStyle}
                        isStyleSelected={isStyleSelected}
                    />
                );
            })}
        </section>
    );
};
