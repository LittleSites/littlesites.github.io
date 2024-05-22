import Swal from "sweetalert2";
import colors from "./env";

export const fireSuccessAlert = (text: string) => {
    const Toast = Swal.mixin({
        icon: "success",
        toast: true,
        position: "top",
        showConfirmButton: false,
        background: colors.projectWhite,
    });

    Toast.fire({
        text,
        timer: 4000,
        timerProgressBar: true,
    })
};