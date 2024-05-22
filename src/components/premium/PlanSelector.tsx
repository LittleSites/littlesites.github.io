import MainButton from "../buttons/MainButton";
import PlanTable from "./PlanTable";
import style from "@/styles/components/premium/CardContainer.module.css"

export default function PlanSelector({ setContent }: any) {
    const viewPaymentMethods = () => {
        setContent("paymentMethod");
    }

    return(
        <div 
            className={style.cardContainer}
        >
            <h4
                className={style.cardTitle}
            >
                Plan premium
            </h4>
            <PlanTable/>
            <div
                className={style.buttonsSection}
            >
                <MainButton onClick={viewPaymentMethods}>
                    Contratar
                </MainButton>
            </div>
        </div>
    )
}