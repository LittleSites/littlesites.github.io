"use client";

import PaymentMethod from "@/components/premium/PaymentMethod";
import PlanSelector from "@/components/premium/PlanSelector.tsx";
import style from "@/styles/pages/premium/Premium.module.css";
import { useState } from "react";

export default function Page() {
    const [content, setContent] = useState("planSelector");
   
    return (
        <div>
            <section className={style.titleSection}>
                <h2 className={style.title}>¡Invierte en tu negocio!</h2>
            </section>

            <section className={style.contentSection}>
                { content === "planSelector" && <PlanSelector setContent={setContent}/> }
                { content === "paymentMethod" && <PaymentMethod setContent={setContent}/> }
            </section>
        </div>
    );
}
