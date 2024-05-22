import { doPremiun } from "@/libs/api/auth/doPremium";
import MainButton from "../buttons/MainButton";
import style from "@/styles/components/premium/CardContainer.module.css"
import sitesCache from "@/libs/utils/cache";
import { fireErrorAlert } from "@/libs/misc/alerts/errorAlert";
import { fireSuccessAlert } from "@/libs/misc/alerts/successAlert";
import { useRouter } from "next/navigation";

export default function PaymentMethod({ setContent = ((e:any) => e.preventDefault()) }) {
    const router = useRouter();
    const viewPlanSelector = () => {
        setContent("planSelector");
    }

    const payPlan = async () => {
        if ( !(sitesCache.userData?.isPremium) ) {
            const successfulPurchase = await doPremiun(sitesCache.userData?.id as number);

            if (successfulPurchase) {
                fireSuccessAlert("Compra existosa");
                router.push('/mysite');
            } else {
                fireErrorAlert("Hubo un error al procesar el pago");
            }
        } else {
            fireErrorAlert("Tu ya cuentas con premium");
        }
        
    }

    return(
        <div 
            className={style.cardContainer}
        >
            <h4
                className={style.cardTitle}
            >
                Método de pago
            </h4>
            <p className={style.paymentMethods}>los metodos de pago aqui...</p>
            <div
                className={style.buttonsSection}
            >
                <button 
                    onClick={viewPlanSelector}
                    className={style.cancelButton}
                >
                    Cancelar
                </button>
                <MainButton onClick={payPlan}>
                    Pagar
                </MainButton>
            </div>
        </div>
    )
}