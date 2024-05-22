import style from "@/styles/components/premium/PlanTable.module.css"

export default function PlanTable() {
    return (
        <table
            className={style.table}
        >
            <thead>
                <tr
                    className={style.row}
                >
                    <th
                        className={style.benefitsCeld}
                    >
                        Beneficios
                    </th>
                    <th
                        className={style.hasBenefitCeld}
                    >
                        Gratuito
                    </th>
                    <th
                        className={style.hasBenefitCeld}
                    >
                        Premium
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    className={`${style.row} ${style.bodyRow}`}
                >
                    <td
                        className={style.benefitsCeld}
                    >
                        Estilo básico
                    </td>
                    <td
                        className={style.hasBenefitCeld}
                    >
                        ✔
                    </td>
                    <td
                        className={style.hasBenefitCeld}
                    >
                        ✔
                    </td>
                </tr>
                <tr
                    className={`${style.row} ${style.bodyRow}`}
                >
                    <td
                        className={style.benefitsCeld}
                    >
                        Estilos premium
                    </td>
                    <td
                        className={style.notHasBenefitCeld}
                    >
                        ✘
                    </td>
                    <td
                        className={style.hasBenefitCeld}
                    >
                        ✔
                    </td>
                </tr>
            </tbody>
        </table>
    )
}