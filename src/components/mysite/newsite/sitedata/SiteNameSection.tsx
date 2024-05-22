import mainStyle from "@/styles/components/mysite/newsite/NewSiteData.module.css";
import fomrStyle from "@/styles/components/mysite/newsite/FormSection.module.css"

export default function SiteNameSection({setSiteName, siteName}: any) {
    return (
        <div className={mainStyle.dataSection}>
            <div className={fomrStyle.customInput}>
                <label className={fomrStyle.label} htmlFor="sitename">
                    Nombre del site
                </label>
                <br />
                <input
                    className={fomrStyle.input}
                    name="siteName"
                    type="text"
                    placeholder="Escribe el nombre del site..."
                    onChange={e => setSiteName(e.target.value)}
                    value={siteName || ''}
                />
            </div>
            <div className={fomrStyle.customInput}>
                {/*  TODO
                <p className={fomrStyle.label}>Url del site</p>
                <p className={fomrStyle.input}>http://sites.com/site/324</p> */}
            </div>
        </div>
    );
};