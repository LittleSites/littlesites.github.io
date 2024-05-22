import Swal from "sweetalert2";
import colors from "./env";
import style from "@/libs/misc/alerts/css/logComponent.module.css";

export const fireErrorAlert = (text: string, errorLog: string | undefined = undefined) => {
    const Toast = Swal.mixin({
        icon: "error",
        toast: true,
        position: "top",
        showConfirmButton: false,
        background: colors.projectWhite,
    });
    
    const LogComponent = `
        <pre class="${style.logContainer}">${errorLog}</pre>
    `
    if (errorLog != undefined) Toast.fire({
        html: `<p>${text}</p> ${LogComponent}`,
        width: '60%'
    });

    else Toast.fire({
        text,
        timer: 4000,
        timerProgressBar: true,
    })
};