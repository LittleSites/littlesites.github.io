import MainButton from "@/components/buttons/MainButton";
import sitesCache from "@/libs/utils/cache";
import style from "@/styles/components/mysite/sitestyle/StyleCard.module.css";
import { useRouter } from "next/navigation";

export const StyleCard = ({
    imgSrc, 
    styleName, 
    isPremium, 
    content, 
    setStyle, 
    isStyleSelected,
    title
}: any) => {
    const canUseStyle = isPremium ? sitesCache.userData?.isPremium : true;
    const router = useRouter();

    const redirectToPremium = () => {
        router.push('/premium');
    }

    const handleSelectStyle = (event: any) => {
        event.preventDefault();

        // @ts-ignore
        setStyle(styleName);
    }

    return (
        <div className={`${style.styleCard} ${isStyleSelected && style.styleSelected}`}>
            <img
                className={style.img}
                src={imgSrc}
            />
            <div className={style.styleInfo}>
                <h4 className={style.styleTitle}>{title}</h4>
                <pre>
                    { 
                        !(isPremium && sitesCache.userData?.isPremium) 
                        &&  "Tienes que ser premium para usar este estilo"
                    }
                </pre>
                <pre>Contenido:    {content}</pre>
                <br />
                <div className={style.buttonSection}>
                    {
                        canUseStyle
                        && <MainButton onClick={handleSelectStyle}>Usar estilo</MainButton>
                        || <MainButton onClick={redirectToPremium}>Pagar premium</MainButton>
                    }
                    
                </div>
            </div>
        </div>
    );
};
